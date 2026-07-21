import './backend-status'
import { LitElement, css, html } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import { repeat } from 'lit/directives/repeat.js'
import { PulseController } from './pulse-controller'
import './status-card'

type NodeStatus = { id: number; region: string; load: number; state: 'stable' | 'watch' }

@customElement('system-command-center')
export class SystemCommandCenter extends LitElement {
  private pulse = new PulseController(this)
  @state() private nodes: NodeStatus[] = [
    { id: 1, region: 'Brussels · eu-west', load: 42, state: 'stable' },
    { id: 2, region: 'Virginia · us-east', load: 78, state: 'watch' },
    { id: 3, region: 'Singapore · ap-south', load: 51, state: 'stable' },
  ]

  private rebalance(id: number) { this.nodes = this.nodes.map((node) => node.id === id ? { ...node, load: Math.max(20, node.load - 18), state: 'stable' } : node) }

  render() {
    const average = Math.round(this.nodes.reduce((sum, node) => sum + node.load, 0) / this.nodes.length)
    return html`<header><div><span class="eyebrow">Edge observability components</span><h1>Edge signal studio</h1><p>Composable custom elements with encapsulated styles and reactive controllers.</p></div><span class="pulse"><i></i>${this.pulse.label}</span></header>
      <section class="metrics"><status-card label="Signal pressure" value="${average}%" detail="Across all regions"></status-card><status-card label="Active regions" value="${this.nodes.length}" detail="Shadow DOM islands"></status-card><status-card label="Telemetry pulse" value="${this.pulse.tick}" detail="Reactive controller"></status-card></section>
      <section class="panel"><div class="title"><div><span class="eyebrow">Edge telemetry</span><h2>Signal regions</h2></div><span>Updated ${this.pulse.label}</span></div>
        ${repeat(this.nodes, (node) => node.id, (node) => html`<article><span class="state ${node.state}"></span><div><b>${node.region}</b><small>${node.state}</small></div><div class="meter"><i style="width:${node.load}%"></i></div><strong>${node.load}%</strong><button @click=${() => this.rebalance(node.id)} ?disabled=${node.load <= 30}>Optimize</button></article>`)}
      </section>`
  }

  static styles = css`
    :host{display:block;max-width:1180px;margin:auto;padding:64px 24px;color:#f0efff}*{box-sizing:border-box}header{display:flex;justify-content:space-between;align-items:end;margin-bottom:36px}h1{font-size:clamp(44px,7vw,76px);letter-spacing:-.055em;margin:8px 0 12px}p{color:#aaa7c5;margin:0}.eyebrow{color:#b495ff;text-transform:uppercase;letter-spacing:.16em;font-size:11px;font-weight:800}.pulse{border:1px solid #3b3658;padding:10px 14px;border-radius:999px;color:#b9b5d3}.pulse i,.state{display:inline-block;width:8px;height:8px;background:#66e2bd;border-radius:50%;margin-right:8px;box-shadow:0 0 12px #66e2bd}.metrics{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.panel{margin-top:14px;padding:24px;background:#151329;border:1px solid #312d4c;border-radius:18px}.title{display:flex;justify-content:space-between;align-items:end}.title h2{font-size:28px;margin:6px 0 18px}.title>span{font-size:12px;color:#918cae}article{display:grid;grid-template-columns:20px 1.4fr 1fr 70px 100px;align-items:center;gap:14px;border-top:1px solid #302c49;padding:18px 0}article small{display:block;color:#8883a5;margin-top:4px}.state.watch{background:#ffba68;box-shadow:0 0 12px #ffba68}.meter{height:7px;background:#292541;border-radius:10px;overflow:hidden}.meter i{display:block;height:100%;background:linear-gradient(90deg,#8968e8,#66e2bd);border-radius:inherit}button{border:1px solid #544b7d;background:#251f43;color:white;border-radius:9px;padding:8px;cursor:pointer}button:disabled{opacity:.4}@media(max-width:700px){:host{padding:34px 16px}header{align-items:start;flex-direction:column;gap:20px}.metrics{grid-template-columns:1fr}article{grid-template-columns:15px 1fr 55px}.meter,article button{display:none}}
  `
}

declare global { interface HTMLElementTagNameMap { 'system-command-center': SystemCommandCenter } }
