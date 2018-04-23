import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Image from '@ckeditor/ckeditor5-image/src/image';
import InsertImage from './InsertImage';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';

ClassicEditor
  .create(document.querySelector('#editor'), {
    heading: {
      options: [
        { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
        { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
        { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
      ]
    },
    plugins: [Heading, Essentials, Paragraph, Bold, Italic, Image, InsertImage, ImageCaption],
    toolbar: ['heading', 'bold', 'italic', 'insertImage']
  })
  .then(editor => {
    console.log('Editor was initialized', editor);
  })
  .catch(error => {
    console.error(error.stack);
  });