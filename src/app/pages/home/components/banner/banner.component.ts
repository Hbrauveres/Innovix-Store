import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
	selector: 'app-banner',
	standalone: true,
	imports: [],
	templateUrl: './banner.component.html',
	styleUrls: ['./banner.component.css']
})
export class BannerComponent implements AfterViewInit {
	currentIndex = 0;
	slides: HTMLElement[] = [];
	totalSlides = 0;

	ngAfterViewInit() {
		this.slides = Array.from(document.querySelectorAll('.carousel-item'));
		this.totalSlides = this.slides.length;
	}

	scrollCarousel(direction: number) {
		this.currentIndex = (this.currentIndex + direction) % this.totalSlides;
		if (this.currentIndex < 0) {
			this.currentIndex = this.totalSlides - 1;
		} 
		
		let offset = -this.currentIndex * (this.slides[0].offsetWidth + 30);
		
		const carouselTrackEl = document.querySelector('.carousel-track') as HTMLElement;
		if (carouselTrackEl) {
			carouselTrackEl.style.transform = `translateX(${offset}px)`;
		}
	}

}