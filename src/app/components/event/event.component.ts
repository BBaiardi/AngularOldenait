import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Event } from '../../models/event';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  events: Event[];
  dangerousUrl: string;
  trustedUrl: SafeUrl;

  constructor(private eventService: EventService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.eventService.getEvents().subscribe(events => {
      this.events = events;
    });
    this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl(this.dangerousUrl);
  }
  sanitizeUrl(dangerousUrl) {
    return this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl(this.dangerousUrl);
  }

}
