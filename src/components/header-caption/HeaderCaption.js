import React, { Component } from 'react';
import { withLocationHoc } from '../hoc/withLocationHoc';
class HeaderCaption extends Component {
  state = {
    currentPage: '',
  };
  handlePage() {
    const { pathname } = this.props.location;
    this.setState({
      currentPage: pathname.slice(1) || 'main',
    });
  }
  componentDidMount() {
    this.handlePage();
  }
  componentDidUpdate(prevProps) {
    if (
      prevProps.location.pathname.slice(1) !==
      this.props.location.pathname.slice(1)
    ) {
      this.handlePage();
    }
  }
  render() {
    return React.createElement(
      'div',
      { className: 'header__caption' },
      'Current page: ',
      this.state.currentPage
    );
  }
}
export default withLocationHoc(HeaderCaption);
