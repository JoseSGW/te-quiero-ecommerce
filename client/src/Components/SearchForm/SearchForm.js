import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchProduct } from "../../actions/products";
import { useHistory } from "react-router-dom";
import { Chan, SearchBar } from "./SearchForm.styled";
import Autocomplete from "react-autocomplete";

export default function SearchForm() {
    const [keyword, setKeyword] = useState("");
    const dispatch = useDispatch();
    const navigate = useHistory();
    const products = useSelector((state) => state.products.products);

    async function handleSubmit(e) {
        e.preventDefault();
        dispatch(searchProduct(keyword));
        navigate.push("/catalogue?search=" + keyword);
        setKeyword("");

    }

    const handleChange = (e) => {
        setKeyword(e.target.value);
    };
    return (
        <SearchBar>
            <form onSubmit={handleSubmit}>
                <Autocomplete style={{maxWidth: "370px"}}
                    getItemValue={(item) => item.label}
                    items={products.map((p) => {
                        return { label: p.name };
                    })}
                    shouldItemRender={(item, value) =>
                        item.label.toLowerCase().indexOf(value.toLowerCase()) >
                        -1
                    }
                    renderItem={(item, isHighlighted) => (
                        <div
                            style={{
                                overflow: "hidden",
                                maxWidth: "370px",
                                zIndex: "20",
                                position: "relative",
                                background: isHighlighted
                                    ? "lightgray"
                                    : "white",
                            }}
                        >
                            {item.label}
                        </div>
                    )}
                    value={keyword}
                    onChange={handleChange}
                    onSelect={(val) => setKeyword(val)}
                    />
                    {/* placeholder='Buscar productos' */}
                {/* <input
                    placeholder="Busca un producto"
                    type="text"
                    value={keyword}
                    onChange={handleChange}
                /> */}
                <button>Buscar</button>
            </form>
        </SearchBar>
    );
}
