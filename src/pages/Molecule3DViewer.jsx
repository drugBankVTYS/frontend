import React, { useState } from 'react';
import axios from 'axios';
import { createViewer } from '3dmol';
const Molecule3DViewer = () => {
  const [smiles, setSmiles] = useState('');
  const [pdbData, setPdbData] = useState('');

  const handleInputChange = (event) => {
    setSmiles(event.target.value);
  };

  const fetchMolecule = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/draw_molecule/DB00007`, {
        responseType: 'text',
      });
      setPdbData(response.data);
      displayMolecule(response.data);
    } catch (error) {
      console.error('Error fetching molecule:', error);
    }
  };

  const displayMolecule = (pdbData) => {
    // Use 3Dmol.js to visualize the molecule
    const viewer = createViewer(document.getElementById('viewer3D'));
    viewer.addModel(pdbData, 'pdb');
    viewer.setStyle({}, { stick: {} });
    viewer.zoomTo();
    viewer.render();
  };
  return (
    <div>
      <input
        type="text"
        value={smiles}
        onChange={handleInputChange}
        placeholder="Enter SMILES"
      />
      <button onClick={fetchMolecule}>Fetch and Display</button>
      <div id="viewer3D" style={{ width: '100%', height: '500px' }}></div>
    </div>
  );
};

export default Molecule3DViewer;
