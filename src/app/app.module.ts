import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PopupDemoComponent1 } from './popup/popup-demo1.component';
import { PopupDirective } from './popup/popup.directive';
import { MessageComponent } from './message/message.component';
import { ContentTabComponent } from './tabs/content-tab.component';
import { ContentTabsetComponent } from './tabs/content-tabset.component';
import { ContentTabsDemoComponent } from './tabs/content-tabs-demo.component';
import { OnInitComponent } from './livecycleHooks/on-init-destroy.component';
import { OnInitDemoComponent } from './livecycleHooks/on-init-destroy-demo.component';
import { OnChangesComponent } from './livecycleHooks/on-changes.component';
import { OnChangesDemoComponent } from './livecycleHooks/on-changes-demo.component';
import { CommentComponent } from './livecycleHooks/comment-docheck.component';
import { CommentsListComponent } from './livecycleHooks/comment-list-docheck.component';
import { AllHooksComponent } from './livecycleHooks/all-hooks.component';
import { AllHooksDemoComponent } from './livecycleHooks/all-hooks-demo.component';
import { NgBookIfDirective } from './rewrite-directives/ng-book-if.directive';
import { NgBookIfDemoComponent } from './rewrite-directives/ng-book-if-demo.component';
import { NgBookForDirective } from './rewrite-directives/ng-book-for.directive';
import { NgBookForDemoComponent } from './rewrite-directives/ng-book-for-demo.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  exports: [PopupDirective],
  declarations: [
    AppComponent,
    HelloComponent,
    PopupDemoComponent1,
    PopupDirective,
    MessageComponent,
    ContentTabComponent,
    ContentTabsetComponent,
    ContentTabsDemoComponent,
    OnInitComponent,
    OnInitDemoComponent,
    OnChangesComponent,
    OnChangesDemoComponent,
    CommentComponent,
    CommentsListComponent,
    AllHooksComponent,
    AllHooksDemoComponent,
    NgBookIfDirective,
    NgBookIfDemoComponent,
    NgBookForDirective,
    NgBookForDemoComponent,
  ],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
