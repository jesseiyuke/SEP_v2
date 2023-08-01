import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Apply");
    }
  

    async getHtml() {
        let html = `
            <h1>File Upload</h1>
            <div id="uploaded_files"></div>
            
                <input type="file" id="fileInput">
                <button onclick="uploadFile()">Upload</button>
                <div>
                    <button onclick="submitFiles()">Save</button>
                    <button onclick="submitFiles()">Apply</button>
                    <button onclick="uploadFile()">Back</button>
                </div>
        

        `
        return html;
        
    }
}