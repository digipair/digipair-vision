import 'aframe';

import {
  customElement,
  html,
  inject,
  injectable,
  MetaElement,
  MetaProvider,
  property,
  state,
  TemplateResult,
} from '@pinser-metaverse/core';
import '@pinser-metaverse/design-system';
import '@pinser-metaverse/gltf';
import '@pinser-metaverse/info';
import '@pinser-metaverse/scene';

@injectable({
  networked: true,
})
class TictactoeService extends MetaProvider {
  @state()
  player = 'X';

  @state()
  pawns = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];

  public async add(line: number, column: number) {
    const pawns = this.pawns;
    const player = this.player;

    if (pawns[line][column] !== '') {
      return;
    }
    pawns[line][column] = player;
    this.player = player === 'X' ? 'O' : 'X';
    this.pawns = pawns;
  }

  public reset() {
    this.pawns = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];
  }
}

@customElement('tic-tac-toe', {
  providers: [TictactoeService],
})
export class TicTacToeElement extends MetaElement {
  @inject()
  private tictactoeService!: TictactoeService;

  private reset() {
    this.tictactoeService.reset();
  }

  override render(): TemplateResult {
    return html`
      <tic-tac-toe-pawn
        positionline="0"
        positioncolumn="0"
        position="-1.1 2.8 0"
      ></tic-tac-toe-pawn>
      <tic-tac-toe-pawn
        positionline="0"
        positioncolumn="1"
        position="0 2.8 0"
      ></tic-tac-toe-pawn>
      <tic-tac-toe-pawn
        positionline="0"
        positioncolumn="2"
        position="1.1 2.8 0"
      ></tic-tac-toe-pawn>
      <!-- line 2 -->
      <tic-tac-toe-pawn
        positionline="1"
        positioncolumn="0"
        position="-1.1 1.7 0"
      ></tic-tac-toe-pawn>
      <tic-tac-toe-pawn
        positionline="1"
        positioncolumn="1"
        position="0 1.7 0"
      ></tic-tac-toe-pawn>
      <tic-tac-toe-pawn
        positionline="1"
        positioncolumn="2"
        position="1.1 1.7 0"
      ></tic-tac-toe-pawn>
      <!-- line 3 -->
      <tic-tac-toe-pawn
        positionline="2"
        positioncolumn="0"
        position="-1.1 0.6 0"
      ></tic-tac-toe-pawn>
      <tic-tac-toe-pawn
        positionline="2"
        positioncolumn="1"
        position="0 0.6 0"
      ></tic-tac-toe-pawn>
      <tic-tac-toe-pawn
        positionline="2"
        positioncolumn="2"
        position="1.1 0.6 0"
      ></tic-tac-toe-pawn>
      <a-sphere
        selectable
        @click=${() => this.reset()}
        position="2.5 0 0"
        scale="0.5 0.5 0.5"
      ></a-sphere>
    `;
  }
}

@customElement('tic-tac-toe-pawn', {
  networked: true,
})
export class PawnElement extends MetaElement {
  @inject()
  private tictactoeService!: TictactoeService;

  @property()
  positionline!: number;

  @property()
  positioncolumn!: number;

  @state()
  backgroundcolor = 'grey';

  private onClick() {
    this.tictactoeService.add(this.positionline, this.positioncolumn);
  }

  override render() {
    const pawns = this.tictactoeService.pawns;
    const player = pawns[this.positionline][this.positioncolumn];

    return html`
      <a-box
        selectable
        scale="1 1 0.1"
        material="color: ${this.backgroundcolor}"
        @click=${() => this.onClick()}
        @mouseenter=${() => (this.backgroundcolor = '#AAAAAA')}
        @mouseleave=${() => (this.backgroundcolor = 'grey')}
      ></a-box>
      <a-text value="${player}" position="-0.29 0 0.1" scale="3 3 1"></a-text>
    `;
  }
}
