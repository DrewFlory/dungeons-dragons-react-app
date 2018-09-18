import React, { Component } from 'react';


export default ({ id, name, initiative, hitpoints, onInitiativeChange, onNameChange, onHitpointsChange  }) =>
<div className="card">
    <input type="text" value = {name} onChange={ e => onNameChange(id,e) } />
    <input type="number" value = {initiative} onChange={ e => onInitiativeChange(id,e) } />
    <input type="number" value = {hitpoints} onChange={ e => onHitpointsChange(id,e) } />
</div>