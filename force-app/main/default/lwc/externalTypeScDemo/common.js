"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntryPoint = void 0;
class EntryPoint {
    constructor() {
        this.dataTable = document.createElement('table');
        this.container = document.createElement('div');
        console.log('call Invoked');
    }
    callMethod(address) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getData(address);
            this.container = document.createElement('div');
            if (response && response.entries) {
                console.log('this is the data', response);
                this.container = this.displayData(response.entries);
                console.log('tableElement ===>', this.container);
                return this.container;
            }
            return this.container;
        });
    }
    displayData(data) {
        console.log('this is the data=>', data);
        this.dataTable = document.createElement('table');
        this.container = document.createElement('div');
        this.container.setAttribute('class', 'parentDiv');
        this.dataTable.setAttribute('class', 'Mastertable');
        // Making Table Head
        const headerRow = document.createElement('tr');
        headerRow.setAttribute('class', 'tableRow');
        for (const i in data[0]) {
            const headerCell = document.createElement('td');
            headerCell.setAttribute('class', 'RowData');
            headerCell.textContent = i;
            headerRow.appendChild(headerCell);
        }
        this.dataTable.appendChild(headerRow);
        // Making Table Body
        for (const i in data) {
            const cellRow = document.createElement('tr');
            for (const j in data[i]) {
                const dataCell = document.createElement('td');
                dataCell.setAttribute('class', 'RowData');
                dataCell.textContent = data[i][j];
                cellRow.appendChild(dataCell);
            }
            this.dataTable.appendChild(cellRow);
        }
        this.container.appendChild(this.dataTable);
        return this.container;
    }
    getData(apiUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('in getData');
            try {
                const response = yield fetch(apiUrl);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = yield response.json();
                console.log('from getData', data);
                return data;
            }
            catch (error) {
                console.error('Error fetching data:', error);
                return null;
            }
        });
    }
}
exports.EntryPoint = EntryPoint;
