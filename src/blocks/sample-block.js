import { registerBlockType } from '@wordpress/blocks';


registerBlockType('my-plugin/my-custom-block', {
    apiVersion: 2,

    title: 'Custom Block',

    icon: 'format-image',

    category: 'Design',
    attributes:{

    },
    edit: ()=> <div>Edit</div>,
    save: ()=> <div>Save</div>
})