import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.html',
  styleUrl: './hello.scss',
})
export class Hello {
  protected title = 'Welcome to modern Angular';
  protected isDisabled= false;
  protected clicks = 0;

  protected onClick() {
    this.clicks++;
  }

  protected counter = signal(0);
  protected doubleCounter = computed(() => this.counter() * 2);
  protected increase() {
    this.counter.update(value => value + 1);
  }

  protected decrease() {
    this.counter.update(value => value - 1);
  }

  protected reset() {
    this.counter.set(0);
  }
}
