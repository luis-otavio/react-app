import React from 'react';
import Grid from '../template/grid';
import IconButton from '../template/iconButton';
export default props => (
	<div role="form" className="examForm">
		<Grid cols="5 4 5">
			<input
				id="name"
				className="form-control"
				placeholder="Nome do paciente"
				onChange={props.handleChangeName}
				value={props.name}
			/>
		</Grid>
		
		<Grid cols="5 2 2">
			<input				
				id="type"
				className="form-control"
				placeholder="Tipo do exame"
				onChange={props.handleChangeType}
				value={props.type}
			/>
		</Grid>

		<Grid cols="5 2 3">
			<input
				id="local"
				className="form-control"
				placeholder="Local do exame"
				onChange={props.handleChangeLocal}
				value={props.local}
			/>
		</Grid>

		<Grid cols='12 3 2'>
           <IconButton style='default' icon='plus'
                onClick={props.handleAdd} />
            <IconButton style='default' icon='search'
                onClick={props.handleSearch} />
			<IconButton style='default' icon='close'
				onClick={props.handleClear}></IconButton>
        </Grid>

		<br/>
	</div>
);
