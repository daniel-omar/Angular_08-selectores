import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'animes-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit, OnChanges, OnDestroy {


  @Input()
  public datos: string[] = [];

  public interval$?: Subscription;

  ngOnInit(): void {
    console.log("Select Component: ngOnInit")
    this.interval$ = interval(1000).subscribe(value => console.log(`Tick: ${value}`))
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Select Component: ngOnChanges")
    console.log(changes)
  }

  ngOnDestroy(): void {
    console.log("Select Component: ngOnDestroy")
    this.interval$?.unsubscribe();
  }

}
