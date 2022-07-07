import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

/** TIPO DE DIRETIVA:
 *    DIRETIVA ESTRUTURAL
 */
@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit {

  @Input('myForEm')
  numbers: number[] = [];

  constructor(
    private container: ViewContainerRef, 
    private template: TemplateRef <any>
    ) { }

  ngOnInit(): void {
    for(let number of this.numbers){
      this.container.createEmbeddedView(
        this.template, {$implicit : number }
      )
    }
    
  }
}
