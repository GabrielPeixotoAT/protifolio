import { NgStyle } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-hero-component',
  imports: [NgStyle],
  templateUrl: './hero-component.html',
  styleUrl: './hero-component.scss',
})
export class HeroComponent {
    blurValue: number = 0;
    opacityValue: number = 1;

    @HostListener('window:scroll', [])
    onWindowScroll(): void {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    
        let calcBlur = scrollPosition / 50;

        let calcOpc = scrollPosition / 70;
        
        this.opacityValue = 1 - (Math.min(calcOpc, 9) / 10);
        this.blurValue = Math.min(calcBlur, 15);
    }

    @HostListener('window:load', [])
    onWindowLoad(): void {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    
        let calcBlur = scrollPosition / 50;

        let calcOpc = scrollPosition / 70;
        
        this.opacityValue = 1 - (Math.min(calcOpc, 9) / 10);
        this.blurValue = Math.min(calcBlur, 15);
    }
}
