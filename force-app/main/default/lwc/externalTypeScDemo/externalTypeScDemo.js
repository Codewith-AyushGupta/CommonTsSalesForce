// ExternalTypeScDemo.js
import { LightningElement, track } from 'lwc';
import { EntryPoint } from './common';
import styles from './externalTypeScDemo.css';
import makeApiCall from '@salesforce/apex/CallExternalAPI.makeApiCall';
import submiData from '@salesforce/apex/CallExternalAPI.submiData';
export default class ExternalTypeScDemo extends LightningElement {
    @track show_form = false;
    @track formFields = {
        name: '',
        age: '',
        colour: ''
    };
    handleInputChange(event) {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        this.formFields = { ...this.formFields, [fieldName]: fieldValue };
    }
    async handleSubmit() {
        var data = JSON.stringify(this.formFields);
        var result
        await submiData({data:this.formFields})
            .then((response) => {
                if(response){
                    alert('Record Created')
                }
            })
            .catch((error) => {
                console.error('Error during API call:', error);
            });
    }
    async handleButtonClick() {
        console.log('Button Clicked!');
        let obj = new EntryPoint();
        let container = document.createElement('div');
        var data;
        await makeApiCall()
            .then((response) => {
                console.log(response);
                data = response;
            })
            .catch((error) => {
                console.error('Error during API call:', error);
            });
        if (data) {
            debugger;
            container = obj.makeStucture(data);
            console.log('contaier', container);
            this.template.querySelector('.table2Master').appendChild(container);
        }
    }
    async handlePostCall() {
        this.show_form = true;
    }

}