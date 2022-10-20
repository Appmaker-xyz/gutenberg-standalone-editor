import BlockEditor from './block-editor'
import { registerCoreBlocks } from '@wordpress/block-library';

registerCoreBlocks();

function App() {
  return (
   <div>
        <BlockEditor />
   </div>
  );
}

export default App;


