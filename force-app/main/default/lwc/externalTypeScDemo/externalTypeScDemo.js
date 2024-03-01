import { LightningElement } from 'lwc';
import {EntryPoint} from './common'
import styles from './externalTypeScDemo.css';

export default class ExternalTypeScDemo extends LightningElement {
    connectedCallback(){
    }
    async handleButtonClick () {
        // Add your custom logic here when the button is clicked
        console.log('Button Clicked!');
         const obj = new EntryPoint();
        const apiString = 'https://api.publicapis.org/entries';
        var container = document.createElement('div');
        container =  await obj.callMethod(apiString);
        console.log('response',container);
        this.template.querySelector('.table').appendChild(container);
    }
}