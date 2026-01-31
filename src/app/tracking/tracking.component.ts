import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracking',
  standalone: true,
  template: '' // no HTML needed
})
export class TrackingComponent implements OnInit {

  async ngOnInit() {

    const VISI_WID = 1040;

    const FLICKER_TIME = 4000;
    const FLICKER_ELEMENT = 'html';

    this.applyFlicker(FLICKER_ELEMENT);
    setTimeout(() => this.removeFlicker(), FLICKER_TIME);

    await this.loadScript(`https://optimize.visioptdev.com/vt.${VISI_WID}_1.js`);

    console.log("VISI: Default Smartcode JS Loaded");
  }

  // JS loader (in same file)
  loadScript(src: string): Promise<void> {
    return new Promise((resolve, reject) => {

      if (document.querySelector(`script[src="${src}"]`)) {
        resolve();
        return;
      }

      const s = document.createElement('script');
      s.src = src;
      s.async = true;

      s.onload = () => resolve();
      s.onerror = () => reject(new Error(`Failed to load ${src}`));

      document.head.appendChild(s);
    });
  }

  // Flicker block logic
  applyFlicker(selector: string) {
    if (document.getElementById('visi_flicker')) return;

    const style = document.createElement('style');
    style.id = 'visi_flicker';
    style.textContent = `${selector}{opacity:0!important;background:none!important;}`;

    document.head.appendChild(style);
  }

  removeFlicker() {
    const f = document.getElementById('visi_flicker');
    if (f) f.remove();
  }
}
