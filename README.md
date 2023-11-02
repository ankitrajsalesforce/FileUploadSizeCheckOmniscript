# FileUploadSizeCheckOmniscript

Description:

Problem:

The current OOTB **file-upload** element/ **lightning-file-upload** lwc doesn't provide an option to check the size before finishing the upload. So the only option we have left is to delete the file if file size doesn't match the expected file size criteria after file upload completion. So ultimately we'll be having 2 DML operation. This will cost more resources and time.

Solution:

This asset contains an LWC, an Apex Trigger and Its Apex Class handler. This component can be used to override the file upload element of Omniscript to apply a file size check without making any DML operation.

This asset will also allow us to retrict the user to upload certain type of files.  We can apply the number of file upload limitation as well.

Once we setup this component, we will have a file upload element where we can upload the files. We will also have a remove link to delete the file. If we reach the number of files limitation the upload button will be disabled.

Features :
  1. Apply the file Size Validation before finishing the upload (See Description)
  2. Apply the file type check Validation
  3. Limit the number of file uploads and Disable the button.

Steps to Install : File Upload Override in Omniscript :

  1. This component can be used in LWC component override.
     
  2. Pass the recordId of Parent record in Content Parent Id where we want to upload the file using variable/value.
     
  3. Click on the Edit Properties as JSON to enter the inputs from the UI.
     
  4. Specify the accepted datatypes in "accepts" parameter.
     
     "accepts": ".jpg,.jpeg,.pdf,.png,.doc,.docx,.heic"
     
  5. Define the error message in the parameter customErrorMsg.
      "customErrorMsg": "Please upload the supporting documents"
     
  6. Define the number of files upload allowed.
     "numOfFilesAllowed": 2
     
  7. Mention "multiple": false/true based on whether we want to allow multiple selection of files.
     


