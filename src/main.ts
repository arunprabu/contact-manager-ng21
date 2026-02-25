/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// the ng app bootstrapped with App Component
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
