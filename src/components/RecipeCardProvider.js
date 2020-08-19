import React from 'react';

class DataProvider extends React.Component {
    state = {
        data: null,
        loading: true
    }

    componentDidMount() {
        fetch(this.props.url)
          .then((response) => {
            return response.json()
          })
          .then(data => {
            this.setState({
              data,
              loading: false
            })
          })
      }

    render() {
        const Component = this.props.renderComponent; //Sposób 1

        if(this.state.loading) {
            return "LOADING ...";
        }

        return(
           <div>
                <Component data={this.state.data}/> 
           </div>
        )
    }
}

export default DataProvider;
