import React, { PureComponent } from 'react';
import { Route, RouteProps, Redirect } from 'react-router-dom';


export type Props = RouteProps & {};


interface S {
  isLoggedInUser: any;
  loading: any;
}


export default class PrivateRoute extends PureComponent<Props, S> {
  constructor(props: any) {
    super(props);
    this.state = {
      isLoggedInUser: false,
      loading: true
    };
  }

  componentDidMount = async () => {
    let isLoggedInUser = await localStorage.getItem('userToken');
    if (isLoggedInUser) {
      this.setState({ isLoggedInUser: isLoggedInUser, loading: false });
    } else {
      this.setState({ loading: false });
    }
  };

  render() {
    return !this.state.loading ? (
      !this.state.isLoggedInUser ? (
        <Redirect to={{ pathname: '/login' }} />
      ) : (
        <Route {...this.props} />
      )
    ) : null;
  }
}



