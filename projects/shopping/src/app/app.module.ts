import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ElectronicsComponent } from './component/electronics/electronics.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { SideComponent } from './side/side.component';
import { AsideComponent } from './aside/aside.component';
import { SectionComponent } from './section/section.component';
import { FooterComponent } from './footer/footer.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { BindingComponent } from './binding/binding.component';
import { BindingnameComponent } from './bindingname/bindingname.component';
import { FormsModule } from '@angular/forms';
import { ModelComponent } from './model/model.component';
import { TodolistComponent } from './todolist/todolist.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    ElectronicsComponent,
    MainComponent,
    HeaderComponent,
    LogoComponent,
    SideComponent,
    AsideComponent,
    SectionComponent,
    FooterComponent,
    DatabindingComponent,
    BindingComponent,
    BindingnameComponent,
    ModelComponent,
    TodolistComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
   
  ],
  providers: [],
  bootstrap: [ LoginComponent]
})
export class AppModule { }
