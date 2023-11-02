import { LightningElement,api } from 'lwc';
import omniscriptFile from "vlocity_cmt/omniscriptFile";
import template from "./parameterFileUpload.html";
import template_nds from "./parameterFileUpload_nds.html";
 
export default class omniBasicFileUpload extends omniscriptFile {
    // your properties and methods here
 
    @api recordId;
    @api accepts;
    @api multiple;
    @api fieldName;
    @api fieldValue;
    @api numOfFilesAllowed;
    parameters = {};
    numFiles=0;
    _firstRender=true;
    _files;
    fileUploadLabel= 'Upload Document required';
    requiredError = "Please upload the supporting documents";
     

     initCompVariables() {
        super.initCompVariables();
        this.accepts = this._propSetMap.accepts;
        this.multiple = this._propSetMap.multiple;
        this.fieldName = this._propSetMap.fieldname;
        this.fieldValue = this._propSetMap.fieldvalue;
        this.recordId = this._jsonData.DRId_Case;
        this.numOfFilesAllowed = this._propSetMap.numOfFilesAllowed;

        this.parameters = this.getQueryParameters();
   
        console.log(this.numFiles+" init: accepts " +this._value.length);
        if(this.numFiles==0 && this._value.length>0)
        {
            this.numFiles= this._value.length;
        }
        this.handleDisableOfUpload();
    }

    renderedCallback() {
        super.renderedCallback();
        let filesMap= true;
        if(this._firstRender === true) {
            if(
                this.jsonDef &&
                this.jsonDef.propSetMap &&
                this.jsonDef.propSetMap
            ) {
                if(this.jsonDef.propSetMap.fileTypes) {
                    let fileTypes = this.jsonDef.propSetMap.fileTypes;
                    const inptElem = this.template.querySelector('lightning-file-upload');
                    if(inptElem && fileTypes) {
                        let acceptFileTypes = fileTypes.split(",");
                        if(acceptFileTypes.length > 0) {
                            acceptFileTypes.forEach((element, index) => {
                                acceptFileTypes[index] = element.trim();
                            });
                            inptElem.accept = acceptFileTypes;
                        }
                    }
                }
                if(this.jsonDef.propSetMap.requiredMessage) {
                    let requiredMessage = this.jsonDef.propSetMap.requiredMessage;
                    this.requiredError = typeof requiredMessage == "string"? requiredMessage:"Required Field";
                }
                this._firstRender = false;
            }
        }
        if(this.numFiles==this._value.length)
        {
            this._files = this._value.map(item => {
                item.ariaLabel = `Remove ${item.filename}`;
                return item;
            });
            filesMap= false;
        }
    }

    handleUploadFinished(event) {
        super.handleUploadFinished(event);
        this.numFiles++;
        this.handleDisableOfUpload();
    }

    deleteFile(evt) {
        super.deleteFile(evt);
        this.numFiles--;
        this.handleDisableOfUpload();
    }

    handleDisableOfUpload() {
        if (!this.multiple) {
            if (this.numFiles >= this.numOfFilesAllowed) {
                this.isDisabled = true;
            } else {
                this.isDisabled = false;
            }
        }
    }
 
render()
    {
    return this.layout === "newport"?template_nds:template;
    }
}