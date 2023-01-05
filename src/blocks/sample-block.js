import { ColorPalette, InspectorControls, RichText, useBlockProps } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';
import { TextControl } from '@wordpress/components';

function Edit(props) {

    const {
        attributes,
        setAttributes,
        className,
    } = props;
    const onChangeBGColor = ( hexColor ) => {
        setAttributes( { bg_color: hexColor } );
    };

    const onChangeTextColor = ( hexColor ) => {
        setAttributes( { text_color: hexColor } );
    };

    return (
        <div { ...useBlockProps() }>
            <InspectorControls key="setting">
                <div id="gutenpride-controls">
                    <fieldset>
                        <legend className="blocks-base-control__label">
                            { ( 'Background color', 'gutenpride' ) }
                        </legend>
                        <ColorPalette // Element Tag for Gutenberg standard colour selector
                            onChange={ onChangeBGColor } // onChange event callback
                        />
                    </fieldset>
                    <fieldset>
                        <legend className="blocks-base-control__label">
                            { ( 'Text color', 'gutenpride' ) }
                        </legend>
                        <ColorPalette // Element Tag for Gutenberg standard colour selector
                            onChange={ onChangeTextColor } // onChange event callback
                        />
                    </fieldset>
                </div>
            </InspectorControls>
            <TextControl
                value={ attributes.message }
                onChange={ ( val ) => setAttributes( { message: val } ) }
                style={ {
                    backgroundColor: attributes.bg_color,
                    color: attributes.text_color,
                } }
            />
        </div>
    );

}

registerBlockType('my-plugin/my-custom-block', {
    apiVersion: 2,

    title: 'Custom Block',

    icon: 'format-image',

    category: 'Design',
    attributes: {

    },
    "supports": {
        align: true,
        "color": {
            "text": true,
            "background": true,
            "link": true
        }
    },
    edit: Edit,
    save: () => <div>Save</div>
})