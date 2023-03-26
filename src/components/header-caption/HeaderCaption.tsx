import React, { Component } from 'react';
import { withLocationHoc, WithRouterProps } from '../hoc/withLocationHoc';
import { HeaderProps } from '../types';

class HeaderCaption extends Component<WithRouterProps> {
  state = {
    currentPage: '',
  };
  handlePage() {
    const { pathname } = this.props.location;
    this.setState({
      currentPage: pathname.slice(1) || 'main',
    });
  }
  componentDidMount(): void {
    this.handlePage();
  }
  componentDidUpdate(prevProps: Readonly<HeaderProps>): void {
    if (
      prevProps.location.pathname.slice(1) !==
      this.props.location.pathname.slice(1)
    ) {
      this.handlePage();
    }
  }
  render() {
    return (
      <h2 className="header__caption">
        Current page: {this.state.currentPage}
      </h2>
    );
  }
}
export default withLocationHoc(HeaderCaption);
