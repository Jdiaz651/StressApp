import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {CustomButton} from '../components/CustomButton';
import { CustomSelect } from '../components/CustomSelect';
import Logo from '../../assets/images/Logo.png';
import { Audio } from 'expo-av';

const NightBreathingMenuScreen = () => {
  const [music, setMusic] = useState('');
  const [cycle, setCycle] = useState(0);
  const navigation = useNavigation();
  let soundLength = 0;
  const musicData = ['Rain', 'Waves', 'Fire', 'Forest', 'Meditation', 'Birds'];
  const cycleData = [1, 2, 3, 5, 10];

/* Code before Expo port
  Sound.setCategory('Playback');
  var gentle_waves = new Sound(
    'gentle_waves_sleep.mp3',
    Sound.MAIN_BUNDLE,
    (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      // loaded successfully
      console.log(
        'duration in seconds: ' +
          gentle_waves.getDuration() +
          'number of channels: ' +
          gentle_waves.getNumberOfChannels()
      );

      // Play the sound with an onEnd callback
    }
  );
  Sound.setCategory('Playback');
  var gentle_rain = new Sound(
    'gentle_rain_sleep.mp3',
    Sound.MAIN_BUNDLE,
    (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      // loaded successfully
      console.log(
        'duration in seconds: ' +
          gentle_rain.getDuration() +
          'number of channels: ' +
          gentle_rain.getNumberOfChannels()
      );

      // Play the sound with an onEnd callback
    }
  );
  Sound.setCategory('Playback');
  var gentle_fire = new Sound('gentle_fire.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // loaded successfully
    console.log(
      'duration in seconds: ' +
        gentle_fire.getDuration() +
        'number of channels: ' +
        gentle_fire.getNumberOfChannels() +
        'number of loops' +
        gentle_fire.getNumberOfLoops()
    );

    // Play the sound with an onEnd callback
  });
  Sound.setCategory('Playback');
  var gentle_rainforest = new Sound(
    'gentle_rainforest.mp3',
    Sound.MAIN_BUNDLE,
    (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      // loaded successfully
      console.log(
        'duration in seconds: ' +
          gentle_rainforest.getDuration() +
          'number of channels: ' +
          gentle_rainforest.getNumberOfChannels() +
          'number of loops' +
          gentle_rainforest.getNumberOfLoops()
      );

      // Play the sound with an onEnd callback
    }
  );
  Sound.setCategory('Playback');
  var med_sleep = new Sound('med_sleep.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // loaded successfully
    console.log(
      'duration in seconds: ' +
        med_sleep.getDuration() +
        'number of channels: ' +
        med_sleep.getNumberOfChannels() +
        'number of loops' +
        med_sleep.getNumberOfLoops(1)
    );

    // Play the sound with an onEnd callback
  });

  Sound.setCategory('Playback');
  var birds_forest = new Sound(
    'birds_forest.mp3',
    Sound.MAIN_BUNDLE,
    (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      // loaded successfully
      console.log(
        'duration in seconds: ' +
          birds_forest.getDuration() +
          'number of channels: ' +
          birds_forest.getNumberOfChannels() +
          'number of loops' +
          birds_forest.getNumberOfLoops(1)
      );

      // Play the sound with an onEnd callback
    }
  );

  const handlePress = () => {
    if (!music) Alert.alert('Please pick a music choice');
    else if (!cycle) Alert.alert('Please select the number of cycles');
    else {
      navigation.navigate('Night Timer', { music: music, cycle: cycle });

      if (music == 'Waves') {
        gentle_waves.play((success) => {
          if (success && cycle == '2') {
            gentle_waves.play();
          } else if (success && cycle == '3') {
            gentle_waves.play((success) => {
              if (success) {
                gentle_waves.play();
              }
            });
          } else if (success && cycle == '5') {
            gentle_waves.play((success) => {
              if (success) {
                gentle_waves.play((success) => {
                  if (success) {
                    gentle_waves.play((success) => {
                      if (success) {
                        gentle_waves.play();
                      }
                    });
                  }
                });
              }
            });
          } else if (success && cycle == '10') {
            gentle_waves.play((success) => {
              if (success) {
                gentle_waves.play((success) => {
                  if (success) {
                    gentle_waves.play((success) => {
                      if (success) {
                        gentle_waves.play((success) => {
                          if (success) {
                            gentle_waves.play((success) => {
                              if (success) {
                                gentle_waves.play((success) => {
                                  if (success) {
                                    gentle_waves.play((success) => {
                                      if (success) {
                                        gentle_waves.play((success) => {
                                          if (success) {
                                            gentle_waves.play();
                                          }
                                        });
                                      }
                                    });
                                  }
                                });
                              }
                            });
                          }
                        });
                      }
                    });
                  }
                });
              }
            });
          } else {
            console.log('playback failed due to audio decoding errors');
          }
        });
      } else if (music == 'Rain') {
        gentle_rain.play((success) => {
          if (success && cycle == '2') {
            gentle_rain.play();
          } else if (success && cycle == '3') {
            gentle_rain.play((success) => {
              if (success) {
                gentle_rain.play();
              }
            });
          } else if (success && cycle == '5') {
            gentle_rain.play((success) => {
              if (success) {
                gentle_rain.play((success) => {
                  if (success) {
                    gentle_rain.play((success) => {
                      if (success) {
                        gentle_rain.play();
                      }
                    });
                  }
                });
              }
            });
          } else if (success && cycle == '10') {
            gentle_rain.play((success) => {
              if (success) {
                gentle_rain.play((success) => {
                  if (success) {
                    gentle_rain.play((success) => {
                      if (success) {
                        gentle_rain.play((success) => {
                          if (success) {
                            gentle_rain.play((success) => {
                              if (success) {
                                gentle_rain.play((success) => {
                                  if (success) {
                                    gentle_rain.play((success) => {
                                      if (success) {
                                        gentle_rain.play((success) => {
                                          if (success) {
                                            gentle_rain.play();
                                          }
                                        });
                                      }
                                    });
                                  }
                                });
                              }
                            });
                          }
                        });
                      }
                    });
                  }
                });
              }
            });
          } else {
            console.log('playback failed due to audio decoding errors');
          }
        });
      } else if (music == 'Fire') {
        gentle_fire.play((success) => {
          if (success && cycle == '2') {
            gentle_fire.play();
          } else if (success && cycle == '3') {
            gentle_fire.play((success) => {
              if (success) {
                gentle_fire.play();
              }
            });
          } else if (success && cycle == '5') {
            gentle_fire.play((success) => {
              if (success) {
                gentle_fire.play((success) => {
                  if (success) {
                    gentle_fire.play((success) => {
                      if (success) {
                        gentle_fire.play();
                      }
                    });
                  }
                });
              }
            });
          } else if (success && cycle == '10') {
            gentle_fire.play((success) => {
              if (success) {
                gentle_fire.play((success) => {
                  if (success) {
                    gentle_fire.play((success) => {
                      if (success) {
                        gentle_fire.play((success) => {
                          if (success) {
                            gentle_fire.play((success) => {
                              if (success) {
                                gentle_fire.play((success) => {
                                  if (success) {
                                    gentle_fire.play((success) => {
                                      if (success) {
                                        gentle_fire.play((success) => {
                                          if (success) {
                                            gentle_fire.play();
                                          }
                                        });
                                      }
                                    });
                                  }
                                });
                              }
                            });
                          }
                        });
                      }
                    });
                  }
                });
              }
            });
          } else {
            console.log('playback failed due to audio decoding errors');
          }
        });
      } else if (music == 'Forest') {
        gentle_rainforest.play((success) => {
          if (success && cycle == '2') {
            gentle_rainforest.play();
          } else if (success && cycle == '3') {
            gentle_rainforest.play((success) => {
              if (success) {
                gentle_rainforest.play();
              }
            });
          } else if (success && cycle == '5') {
            gentle_rainforest.play((success) => {
              if (success) {
                gentle_rainforest.play((success) => {
                  if (success) {
                    gentle_rainforest.play((success) => {
                      if (success) {
                        gentle_rainforest.play();
                      }
                    });
                  }
                });
              }
            });
          } else if (success && cycle == '10') {
            gentle_rainforest.play((success) => {
              if (success) {
                gentle_rainforest.play((success) => {
                  if (success) {
                    gentle_rainforest.play((success) => {
                      if (success) {
                        gentle_rainforest.play((success) => {
                          if (success) {
                            gentle_rainforest.play((success) => {
                              if (success) {
                                gentle_rainforest.play((success) => {
                                  if (success) {
                                    gentle_rainforest.play((success) => {
                                      if (success) {
                                        gentle_rainforest.play((success) => {
                                          if (success) {
                                            gentle_rainforest.play();
                                          }
                                        });
                                      }
                                    });
                                  }
                                });
                              }
                            });
                          }
                        });
                      }
                    });
                  }
                });
              }
            });
          } else {
            console.log('playback failed due to audio decoding errors');
          }
        });
      } else if (music == 'Meditation') {
        med_sleep.play((success) => {
          if (success && cycle == '2') {
            med_sleep.play();
          } else if (success && cycle == '3') {
            med_sleep.play((success) => {
              if (success) {
                med_sleep.play();
              }
            });
          } else if (success && cycle == '5') {
            med_sleep.play((success) => {
              if (success) {
                med_sleep.play((success) => {
                  if (success) {
                    med_sleep.play((success) => {
                      if (success) {
                        med_sleep.play();
                      }
                    });
                  }
                });
              }
            });
          } else if (success && cycle == '10') {
            med_sleep.play((success) => {
              if (success) {
                med_sleep.play((success) => {
                  if (success) {
                    med_sleep.play((success) => {
                      if (success) {
                        med_sleep.play((success) => {
                          if (success) {
                            med_sleep.play((success) => {
                              if (success) {
                                med_sleep.play((success) => {
                                  if (success) {
                                    med_sleep.play((success) => {
                                      if (success) {
                                        med_sleep.play((success) => {
                                          if (success) {
                                            med_sleep.play();
                                          }
                                        });
                                      }
                                    });
                                  }
                                });
                              }
                            });
                          }
                        });
                      }
                    });
                  }
                });
              }
            });
          } else if (music == 'Birds') {
            birds_forest.play((success) => {
              if (success && cycle == '2') {
                birds_forest.play();
              } else if (success && cycle == '3') {
                birds_forest.play((success) => {
                  if (success) {
                    birds_forest.play();
                  }
                });
              } else if (success && cycle == '5') {
                birds_forest.play((success) => {
                  if (success) {
                    birds_forest.play((success) => {
                      if (success) {
                        birds_forest.play((success) => {
                          if (success) {
                            birds_forest.play();
                          }
                        });
                      }
                    });
                  }
                });
              } else if (success && cycle == '10') {
                birds_forest.play((success) => {
                  if (success) {
                    birds_forest.play((success) => {
                      if (success) {
                        birds_forest.play((success) => {
                          if (success) {
                            birds_forest.play((success) => {
                              if (success) {
                                birds_forest.play((success) => {
                                  if (success) {
                                    birds_forest.play((success) => {
                                      if (success) {
                                        birds_forest.play((success) => {
                                          if (success) {
                                            birds_forest.play((success) => {
                                              if (success) {
                                                birds_forest.play();
                                              }
                                            });
                                          }
                                        });
                                      }
                                    });
                                  }
                                });
                              }
                            });
                          }
                        });
                      }
                    });
                  }
                });
              } else {
                console.log('playback failed due to audio decoding errors');
              }
            });
          } else {
            console.log('playback failed due to audio decoding errors');
          }
        });
      }
    }
  };
*/
  
const handlePress = async (music, cycle) => {
  async function playSound(filePath, cycles) {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(filePath);

    console.log('Playing Sound');
    for (let i = 0; i < cycles; i++) {
      try {
        await sound.setPositionAsync(0);
        await sound.playAsync().then(function (result) {
          soundLength = result.durationMillis;
        });
        const durationInSeconds = soundLength;
        await new Promise((resolve) =>
          setTimeout(resolve, durationInSeconds)
        );
      } catch (error) {
        console.error('Error playing sound:', error);
      }
    }
  }

  if (!music) {
    Alert.alert('Please pick a music choice');
    return;
  }

  if (!cycle) {
    Alert.alert('Please select the number of cycles');
    return;
  }

  let soundFile = '';
  switch (music[0]) {
    case 'Waves':
      soundFile = 'explosion_3.mp3';
      break;
    case 'Rain':
      soundFile = 'explosion_3.mp3';
      break;
    case 'Fire':
      soundFile = 'explosion_3.mp3';
      break;
    case 'Forest':
      soundFile = 'explosion_3.mp3';
      break;
    case 'Meditation':
      soundFile = 'explosion_3.mp3';
      break;
    case 'Birds':
      soundFile = 'explosion_3.mp3';
      break;
    default:
      console.log('Invalid music choice');
      return;
  }

  if (soundFile) {
    const pagePath = window.location.href;
    
    navigation.navigate('TimerScreen', {music: music, cycle: cycle, reference:pagePath});
    await playSound(`../../assets/sounds/${soundFile}`, cycle);
  }
};

return (
    <SafeAreaView style={[styles.root]}>
      <View style={styles.header}>
        <View style={{ width: 100 }}>
          <CustomButton
            text="<"
            onPress={() => navigation.goBack()}
            type="blackBackButton"
          />
        </View>
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
          <View style={{ marginRight: 100 }}>
            <Image source={Logo} style={styles.logo} resizeMode="cover" />
          </View>
        </View>
      </View>

      <Text style={styles.title}>Music choice?</Text>

      <CustomSelect
        radio={true}
        data={musicData}
        onSelect={(value) => setMusic(value)}
        type="PRIMARY"
      />

      <Text style={styles.title}>Number of cycles?</Text>

      <CustomSelect
        radio={true}
        data={cycleData}
        onSelect={(value) => setCycle(value)}
        type="PRIMARY"
      />

      <View style={styles.button}>
        <CustomButton
          text="Start"
          href=""
          onPress={() => handlePress(music, cycle)}
          type="SECONDARY"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    maxWidth: 75,
    maxHeight: 75,
    marginVertical: 10,
  },
  volume: {
    width: 30,
    height: 30,
    margin: 20,
    alignSelf: 'flex-end',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000000',
    marginVertical: 5,
    textAlign: 'center',
  },
  button: {
    flex: 1,
    flexDirection: 'column-reverse',
    paddingBottom: 10,
  },
});

export default NightBreathingMenuScreen;
