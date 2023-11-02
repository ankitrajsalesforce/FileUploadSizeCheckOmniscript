# FileUploadSizeCheckOmniscript

Description:
This asset contains an LWC, an Apex Trigger and Its Apex Class handler. This component can be used to override the file upload element of Omniscript to apply a file size check. 
The current OOTB **file-upload** element/ **lightning-file-upload** lwc doesn't provide an option to check the size before finishing the upload. So the only option we have left is to delete the file if file size doesn't match the expected file size criteria after file upload completion. So ultimately we'll be having 2 DML operation. This will cost more resources and time.
This asset will also allow us to retrict the user to upload certain type of files.  We can apply the number of file upload limitation as well.

Features :
  1. Apply the file Size Validation before finishing the upload (See Description)
  2. Apply the file type check Validation
  3. Limit the number of file uploads and Disable the button.


