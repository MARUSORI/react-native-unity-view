import React from 'react';
import {
  requireNativeComponent,
  UIManager,
  findNodeHandle,
  Platform,
  NativeSyntheticEvent,
} from 'react-native';

interface UnityMessage {
  message: string;
}

type ReactNativeUnityViewProps = {
  onUnityMessage?: (event: NativeSyntheticEvent<UnityMessage>) => void;
};

const ComponentName = 'ReactNativeUnityView';

const ReactNativeUnityView =
  requireNativeComponent<ReactNativeUnityViewProps>(ComponentName);

export default class UnityView extends React.Component<ReactNativeUnityViewProps> {
  static defaultProps = {};

  constructor(props: any) {
    super(props);
  }

  public postMessage(gameObject: string, methodName: string, message: string) {
    UIManager.dispatchViewManagerCommand(
      findNodeHandle(this),
      this.getCommand('postMessage'),
      [gameObject, methodName, message]
    );
  }

  public unloadUnity() {
    UIManager.dispatchViewManagerCommand(
      findNodeHandle(this),
      this.getCommand('unloadUnity'),
      []
    );
  }

  public pauseUnity(pause: boolean) {
    UIManager.dispatchViewManagerCommand(
      findNodeHandle(this),
      this.getCommand('pauseUnity'),
      [pause]
    );
  }

  private getCommand(cmd: string): any {
    if (Platform.OS === 'ios') {
      return UIManager.getViewManagerConfig('ReactNativeUnityView').Commands[
        cmd
      ];
    } else {
      return cmd;
    }
  }

  private getProps() {
    return {
      ...this.props,
    };
  }

  public componentWillUnmount() {
    this.unloadUnity();
  }

  public render() {
    return <ReactNativeUnityView {...this.getProps()} />;
  }
}