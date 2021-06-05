import { useEffect } from 'react'
import { useRecoilSnapshot } from 'recoil'

import _ from 'lodash'

const RecoilStateWatcher = (props) => {
  const {
    onlyLogTheseAtoms,
    isLogging
  } = props
  const snapshot = useRecoilSnapshot();

  useEffect(() => {
    if (isLogging) {      
      for (const node of snapshot.getNodes_UNSTABLE({isModified: true})) {
        if (_.includes(onlyLogTheseAtoms, node.key) || _.isUndefined(onlyLogTheseAtoms)) {
          console.log(`Recoil:`, node.key, snapshot.getLoadable(node));
        }
      }
    }
  }, [
    isLogging,
    snapshot,
  ]);

  return null;
}

export default RecoilStateWatcher