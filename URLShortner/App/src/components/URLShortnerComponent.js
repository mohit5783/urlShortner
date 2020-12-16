import React from 'react';
import "./URLShortnerComponent.css";

export default class URLShortnerComponent extends React.Component {
    state = {
        myurls: [],
        loading: true,
        LongURL: "",
        ShortURL: "",
        ErrorMessage: ""
    };
    // async componentDidMount() {
    //     const url = "http://localhost:5000/api/getAllUrls"
    //     const response = await fetch(url, {
    //         method: 'GET',
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //     });
    //     const urls = await response.json();
    //     this.setState({ myurls: urls, loading: false });
    // }
    handleChange = (e) => {
        this.setState({
            LongURL: e.target.value
        });
    };
    handleSubmit = async (e) => {
        const url = "http://localhost:5000/api/AddURL"
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "LongURL": this.state.LongURL })
        });
        const apistatus = await response.status;
        if (apistatus === 200) {
            const urls = await response.json();
            this.setState({ ShortURL: urls.ShortURL });
        }
        else {
            const ressp = await response.json();
            this.setState({ ErrorMessage: ressp.message });

        }
    };
    render() {
        return (
            <div>

                <input type="text"
                    name="LongURL"
                    placeholder="Your Long URL"
                    value={this.state.LongURL}
                    onChange={event => this.handleChange(event)}
                    required
                />
                <button type="submit" onClick={this.handleSubmit} disabled={!this.state.LongURL}>Get Your Short URL</button>
                <div>
                    {
                        this.state.ShortURL !== ""
                            ? <p>Your Short URL is <a href={this.state.ShortURL}>{this.state.ShortURL}</a> </p>
                            : ""
                    }
                    {
                        this.state.ErrorMessage !== ""
                            ? <p className="ErrorMsg">{this.state.ErrorMessage}</p>
                            : ""
                    }

                </div>
            </div >
        )
    };
}
