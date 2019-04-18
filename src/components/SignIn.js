import React from 'react'
import { StyledFirebaseAuth } from 'react-firebaseui'

import { getUiConfig } from '../../../my-new-website/src/firebase'
import { withFirebase } from './FirebaseContext'
import Header from '../../../my-new-website/src/components/header'

const SignIn = ({ firebase }) => (
  <div>
    <Header siteTitle="Gatsby Firebase Starter" />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h4>Hey, please login to continue</h4>
      <h5>This is just firebase login test</h5>
    </div>
    <StyledFirebaseAuth
      uiConfig={getUiConfig(firebase)}
      firebaseAuth={firebase.auth()}
    />
  </div>
)

export default withFirebase(SignIn)
