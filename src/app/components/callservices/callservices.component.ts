import { Component, OnInit } from '@angular/core';
import { PlatformserviceService } from '../../services/platformservice/platformservice.service';
import { LocalStorageService } from '../../services/localStorage/local-storage.service';
import { GlobalService } from '../../services/global/global.service';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { CookiesService } from '../../services/cookies/cookies.service';

@Component({
  selector: 'app-callservices',
  standalone: true,
  imports: [],
  templateUrl: './callservices.component.html',
  styleUrl: './callservices.component.scss',
})
export class CallservicesComponent implements OnInit {
  private baseUrl!: string;
  COOKIE_KEY = makeStateKey<string>('cookie_key');

  constructor(
    private readonly _PlatformserviceService: PlatformserviceService,
    private readonly _LocalStorageService: LocalStorageService,
    private readonly _GlobalService: GlobalService,
    private readonly _CookieService: CookiesService,
    private readonly _TransferState: TransferState
  ) {}

  ngOnInit(): void {
    // call platform browser using service which handle our ssr issues   >>> Accessing Browser-Specific APIs
    if (this._PlatformserviceService.isBrowser()) {
      console.log(window.innerWidth);
      console.log(window.location.href);
    }
    // call platform server using service which handle our ssr issues   >>> Using Third-Party Libraries That Access the DOM
    if (this._PlatformserviceService.isServer()) {
      this.baseUrl = this._PlatformserviceService.isServer()
        ? 'https://api.browser.com'
        : 'https://api.server.com';
      console.log('baseUrl is: ', this.baseUrl);
    }

    // call local storage using service which handle our ssr issues  >>> Using LocalStorage or SessionStorage
    this._LocalStorageService.setItem('token', '12345');
    console.log('Token Value:', this._LocalStorageService.getItem('token'));

    // call from global service that handle all browser APIs
    console.log(
      'get location of window: ',
      this._GlobalService.getGlobalValue('location')
    );

    // call cookie from cookie service that handle cookie ssr issues
    this._CookieService.setCookie('cookie', '8821347');

    // Get and log the cookie value
    const cookieValue = this._CookieService.getCookie('cookie');
    console.log('Cookie Value:', cookieValue);
  }
}
