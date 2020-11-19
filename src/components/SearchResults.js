import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Image, Modal } from 'semantic-ui-react'

const SearchResults = ({ searchResult }) => {
    const [result, setResult] = useState([])
    const [isModalOpen, setModalTrigger] = useState(false)
    const [selectedImageurl , setImgUrl] = useState('');

    useEffect(() => {
        searchResult && setResult(searchResult)
    }, [setResult, searchResult, result])

    const getTableRows = () => {
        return result.map((el, ind) => {
            return (
                <tr key={ind} className="table-row">
                    <td><a target="_blank" href={el.url}>{el.title}</a></td>
                    <td><a target="_blank" href={el.url}>{el.description}</a></td>
                    <td><a target="_blank" href={el.url}>{el.author}</a></td>
                </tr>
            )
        });
    }

    const getNoDataRow = () => {
        return (
            <tr className="table-row">
                <td colSpan="3">No Records Found</td>
            </tr>
        )
    }

    const setUrl = (el) => {
        setImgUrl(el.urlToImage)
        setModalTrigger(true);
    }


    const getThumnailRows = () => {
        return result.map((el, ind) => {
            return (
                <tr key={ind} className="table-row">
                    <td onClick={() => setUrl(el)}><img alt="No Image" src={el.urlToImage}/></td>
                </tr>
            )
        });
    }


    return (
        <div className="table-container">
             <div className="left-table-container">
                <table className="left-table">
                    <thead className="thead-dark">
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Author</th>
                        </tr>
                    </thead>
                    <tbody>
                            {result && result.length ? getTableRows() : getNoDataRow() }
                    </tbody>
                </table>
            </div>
            <div className="right-table-container">
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th>Thumbnail</th>
                        </tr>
                    </thead>
                    <tbody>
                            {result && result.length ? getThumnailRows() : getNoDataRow() }
                    </tbody>
                </table>

            </div>
            <Modal
                className="table-modal"
                centered={true}
                onClose={() => setModalTrigger(false)}
                onOpen={() => setModalTrigger(true)}
                open={isModalOpen}
                >
                <Modal.Header>Selected Image</Modal.Header>
                <Modal.Content>
                    <Image size='medium' src={selectedImageurl} wrapped />
                </Modal.Content>
            </Modal>
        </div>
       
    )
}

const mapStateToProps = (state) => {
    return {
        searchResult: state.searchResult
    }
}

export default connect(mapStateToProps, null)(SearchResults);