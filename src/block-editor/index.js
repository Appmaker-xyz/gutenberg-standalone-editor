import React from "react";
import { useState } from "@wordpress/element";
import {
	BlockEditorKeyboardShortcuts,
	BlockEditorProvider,
	BlockList,
	BlockInspector,
	WritingFlow,
	ObserveTyping
} from "@wordpress/block-editor";
import {
	Popover,
	SlotFillProvider,
	DropZoneProvider
} from "@wordpress/components";
import "@wordpress/format-library";
import SideBar from "../sidebar";
import { useEffect } from "react";

import "./style.scss";

function Editor() {
	const [blocks, updateBlocks] = useState([]);
	// registerCoreBlocks is in App.js
	useEffect(() => {
		console.log('blocks', blocks);
	}, [blocks])

	return (
		<div className="playground">
			<SlotFillProvider>
				<DropZoneProvider>
					<BlockEditorProvider
						value={blocks}
						onInput={updateBlocks}
						onChange={updateBlocks}
						settings={{ __experimentalBlockPatterns: [] }}
					>
						<SideBar />
						<div className="playground__sidebar">
							<BlockInspector />
						</div>
						<div className="editor-styles-wrapper">
							<Popover.Slot name="block-toolbar" />
							<BlockEditorKeyboardShortcuts />
							<WritingFlow>
								<ObserveTyping>
									<BlockList />
								</ObserveTyping>
							</WritingFlow>
						</div>
						<Popover.Slot />
					</BlockEditorProvider>
				</DropZoneProvider>
			</SlotFillProvider>
		</div>
	);
}

export default Editor;

 // export default {
 // 	title: 'Playground/Block Editor',
 // };
 //
 // export const _default = () => {
 // 	return <App />;
 // };
