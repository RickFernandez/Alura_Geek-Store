import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() imgSrc!: string;
  @Input() imgAlt!: string;
  @Input() productName!: string;
  @Input() productPrice!: string;

}
