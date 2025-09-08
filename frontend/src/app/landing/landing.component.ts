import {
  Component,
  OnInit,
  OnDestroy,
  ElementRef,
  ViewChild,
  Inject,
  PLATFORM_ID,
  HostListener
} from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CommonModule, NgStyle, isPlatformBrowser } from '@angular/common';

interface Features {
  title?: string;
  description?: string;
  src?: string;
  link?: string;
}

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
  animations: [
    trigger('cardAnimation', [
      state(
        '*',
        style({
          transform: 'scale({{scale}}) translateY({{translateY}}px)',
        }),
        { params: { scale: 1, translateY: 0 } }
      ),
      transition('* => *', animate('100ms ease-out')),
    ]),
  ],
})
export class LandingComponent implements OnInit, OnDestroy {
  @ViewChild('container', { static: true }) container!: ElementRef;

    features: Features[] = [
    {
      src: 'tree.jpg',

    },
    {
      title: 'Clément Chapillon',
      description: 'This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes"—so French photographer Clément.',
      src: 'tree.jpg',
    },
    {
      title: 'Zissou',
      description: 'Though he views photography as a medium for storytelling, Zissou\'s images don\'t insist on a narrative. Both crisp and ethereal.',
      src: 'tree.jpg',
    },
    {
      title: 'Mathias Svold and Ulrik Hasemann',
      description: 'The coastlines of Denmark are documented in tonal colors in a pensive new series by Danish photographers Ulrik Hasemann and Mathias Svold; an ongoing project investigating how humans interact with and disrupt the Danish coast.',
      src: 'tree.jpg',
    },
  ];

  scrollY = 0;
  cardStates: any[] = [];
  private scrollListener!: () => void;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

    showScrollButton = false;


  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.showScrollButton = window.scrollY > 100;
    }
  }

  ngOnInit() {
    this.initializeCardStates();
  }



  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId) && this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }

  initializeCardStates() {
    this.cardStates = this.features.map(() => ({
      scale: 1,
      translateY: 0,
      imageScale: 2,
    }));
  }




  getImageStyle(index: number) {
    const state = this.cardStates[index];
    return {
      transform: `scale(${state.imageScale})`,
    };
  }
}
