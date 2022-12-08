import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  // ActivatedRoute 包含路由的路径参数相关信息
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    //route.snapshot 是一个 ActivatedRouteSnapshot
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.product = products.find(p => p.id == productIdFromRoute)
  }
}
