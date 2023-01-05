import React from "react";
import { useState } from "@wordpress/element";
import {
  BlockEditorKeyboardShortcuts,
  BlockEditorProvider,
  BlockList,
  BlockInspector,
  WritingFlow,
  ObserveTyping,
  BlockTools,
} from "@wordpress/block-editor";
import {
  Popover,
  SlotFillProvider,
  DropZoneProvider,
} from "@wordpress/components";
import "@wordpress/format-library";
import SideBar from "../sidebar";
import { useEffect } from "react";
import { ShortcutProvider } from "@wordpress/keyboard-shortcuts";
import "./style.scss";
import "../blocks/index";
import { useLocalStorage } from 'react-use';

function Editor() {
  const [blocks, updateBlocks, remove] = useLocalStorage('page-home',[]);
  // registerCoreBlocks is in App.js
  useEffect(() => {
    console.log("blocks", blocks);
  }, [blocks]);

  return (
    <ShortcutProvider className="playground">
      <SlotFillProvider>
        <DropZoneProvider>
          <BlockEditorProvider
            value={blocks}
            onInput={updateBlocks}
            onChange={updateBlocks}
            settings={{ __experimentalBlockPatterns: [],
              codeEditingEnabled: false,
              colors:[
                { name: 'red', color: '#f00' },
                { name: 'white', color: '#fff' },
                { name: 'blue', color: '#00f' },
              ],
              alignWide: true,
            //   color:{
            //   disableCustomColors: false,
            // } 
          }}
          >
            <SideBar />
            <div className="playground__sidebar ">
              <BlockInspector />
            </div>
            <div className="editor-styles-wrapper">
              <BlockEditorKeyboardShortcuts />
              <BlockTools>
                <WritingFlow>
                  <ObserveTyping>
                    <BlockList />
                  </ObserveTyping>
                </WritingFlow>
              </BlockTools>
              <Popover.Slot name="block-toolbar" />
            </div>
            <Popover.Slot />
          </BlockEditorProvider>
        </DropZoneProvider>
      </SlotFillProvider>
    </ShortcutProvider>
  );
}

export default Editor;
