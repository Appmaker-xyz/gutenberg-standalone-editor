import { __experimentalLibrary as Library } from '@wordpress/block-editor';
import {
    useViewportMatch,
    __experimentalUseDialog as useDialog,
} from '@wordpress/compose';

const SideBar = () => {
    const isMobileViewport = useViewportMatch('medium', '<');
    const setIsInserterOpened = () => { };

    const [inserterDialogRef, inserterDialogProps] = useDialog({
        onClose: () => setIsInserterOpened(false),
    });

    return (
        <div
            ref={inserterDialogRef}
            {...inserterDialogProps}
        >
            <Library
                shouldFocusBlock={isMobileViewport}
                showMostUsedBlocks={true}
            />
        </div>
    )
}

export default SideBar