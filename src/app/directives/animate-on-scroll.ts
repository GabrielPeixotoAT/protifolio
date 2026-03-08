import {
    Directive,
    ElementRef,
    Renderer2,
    DestroyRef,
    inject,
    afterNextRender
} from '@angular/core';

@Directive({
    selector: '[appAnimateOnScroll]',
    standalone: true
})
export class AnimateOnScrollDirective {
    private el = inject(ElementRef);
    private renderer = inject(Renderer2);
    private destroyRef = inject(DestroyRef);

    private observer!: IntersectionObserver;

    constructor() {
        afterNextRender(() => {
            this.setupObserver();
        });
    }

    private setupObserver(): void {
        console.log("RODOU!");
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2
        };

        this.observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                this.renderer.addClass(this.el.nativeElement, 'is-visible');

                this.observer.unobserve(this.el.nativeElement);
            }
        }, options);

        this.observer.observe(this.el.nativeElement);

        this.destroyRef.onDestroy(() => {
            if (this.observer) {
                this.observer.disconnect();
            }
        });
    }
}