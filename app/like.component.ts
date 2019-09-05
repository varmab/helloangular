import { Component } from '@angular/core'

@Component({
    selector:'like',
    template:`
        <button (click)="updateLikeStatus()">{{likeStatus}} <span *ngIf="likeStatus=='Like'">{{likeCount}}</span></button>
    `
})
export class LikeComponent{
    likeStatus:string="Like"
    likeCount:number=0;

    updateLikeStatus(){
       this.likeCount++;
    }
}