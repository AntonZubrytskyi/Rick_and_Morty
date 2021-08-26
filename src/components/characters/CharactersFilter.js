import React, { useState } from 'react';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

function CharactersFilter({characters, setAllCharacters, setCurrentPage}){
    const classes = useStyles();
    const [species, setSpecies] = useState('');
    const [gender, setGender] = useState('');
    const [status, setStatus] = useState('');

    const handleChangeSpecies = (event) => {
        const filteredCharacters = characters.filter((item) => item.species === `${event.target.value}`);
        setSpecies(`${event.target.value}`);
        setGender('');
        setStatus('');
        setAllCharacters(filteredCharacters);
        setCurrentPage(1);
    };

    const handleChangeGender = (event) => {
        const filteredCharacters = characters.filter((item) => item.gender === `${event.target.value}`);
        setGender(`${event.target.value}`);
        setSpecies('');
        setStatus('');
        setAllCharacters(filteredCharacters);
        setCurrentPage(1);
    };

    const handleChangeStatus = (event) => {
        const filteredCharacters = characters.filter((item) => item.status === `${event.target.value}`);
        setStatus(`${event.target.value}`);
        setSpecies('');
        setGender('');
        setAllCharacters(filteredCharacters);
        setCurrentPage(1);
    };

    return(
        <>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Species</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={species}
                    onChange={handleChangeSpecies}
                >
                    <MenuItem value='Human'>Human</MenuItem>
                    <MenuItem value='Alien'>Alien</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={status}
                    onChange={handleChangeStatus}
                >
                    <MenuItem value='Alive'>Alive</MenuItem>
                    <MenuItem value='Dead'>Died</MenuItem>
                    <MenuItem value='unknown'>unknown</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={gender}
                    onChange={handleChangeGender}
                >
                    <MenuItem value='Male'>Male</MenuItem>
                    <MenuItem value='Female'>Female</MenuItem>
                </Select>
            </FormControl>
        </>
    )
}

export default CharactersFilter;
