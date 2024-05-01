import { colSpanTd } from "./colSpan";

export function generateTd2(taille, time, fins, element) {
    const debutCoursHour = parseInt(taille[0].debutCours.substring(0, 2));
    const finCoursHour = parseInt(taille[0].finCours.substring(0, 2));
    // const debutCoursHour1 = parseInt(taille[1].debutCours.substring(0, 2));
    // const finCoursHour1 = parseInt(taille[1].finCours.substring(0, 2));
     
 
    switch (time) {
//   verification de la seance heures debut 8
case 8:
    if (parseInt(taille[0].debutCours) === 8) {
      return (
        <>
          <td style={{ position: 'relative' }} colSpan={colSpanTd(8, fins)}>
            <span
              style={{
                fontSize: '11px',
                fontWeight: '600',
                color: '#000000',
                position: 'absolute',
                top: '24%',
                left: '40%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
              <span>{`${element.nomSalle.toUpperCase()}`}</span>
            </span>
          </td>
        </>
      );
    } else if (parseInt(taille[1].debutCours) === 8) {
      return (
        <>
          <td style={{ position: 'relative' }} colSpan={colSpanTd(8, fins)}>
            <span
              style={{
                fontSize: '11px',
                fontWeight: '600',
                color: '#000000',
                position: 'absolute',
                top: '24%',
                left: '40%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
              <span>{`${element.nomSalle.toUpperCase()}`}</span>
            </span>
          </td>
        </>
      );
    } else if (parseInt(taille[2].debutCours) === 8) {
      return (
        <>
          <td style={{ position: 'relative' }} colSpan={colSpanTd(8, fins)}>
            <span
              style={{
                fontSize: '11px',
                fontWeight: '600',
                color: '#000000',
                position: 'absolute',
                top: '24%',
                left: '40%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
              <span>{`${element.nomSalle.toUpperCase()}`}</span>
            </span>
          </td>
        </>
      );
    }
    break;
  
    //   verification de la seance heures debut 8
    case 9:
        if (parseInt(taille[0].debutCours) === 9) {
          return (
            <>
              <td style={{ border: "none" }}></td>
              <td style={{ position: 'relative' }} colSpan={colSpanTd(9, fins)}>
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: '600',
                    color: '#000000',
                    position: 'absolute',
                    top: '24%',
                    left: '40%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                  <span>{`${element.nomSalle.toUpperCase()}`}</span>
                </span>
              </td>
            </>
          );
        } else if (parseInt(taille[1].debutCours) === 9) {
          switch (debutCoursHour) {
            case 8:
              switch (finCoursHour) {
                case 9:
                  return (
                    <>
                      <td style={{ position: 'relative' }} colSpan={colSpanTd(9, fins)}>
                        <span
                          style={{
                            fontSize: '11px',
                            fontWeight: '600',
                            color: '#000000',
                            position: 'absolute',
                            top: '24%',
                            left: '40%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                          <span>{`${element.nomSalle.toUpperCase()}`}</span>
                        </span>
                      </td>
                    </>
                  );
                default:
                  return null;
              }
            default:
              return null;
          }
        } else if (parseInt(taille[2].debutCours) === 9) {
          switch (parseInt(taille[1].debutCours.substring(0, 2))) {
            case 8:
              switch (parseInt(taille[1].finCours.substring(0, 2))) {
                case 9:
                  return (
                    <>
                      <td style={{ position: 'relative' }} colSpan={colSpanTd(9, fins)}>
                        <span
                          style={{
                            fontSize: '11px',
                            fontWeight: '600',
                            color: '#000000',
                            position: 'absolute',
                            top: '24%',
                            left: '40%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                          <span>{`${element.nomSalle.toUpperCase()}`}</span>
                        </span>
                      </td>
                    </>
                  );
                default:
                  return null;
              }
            default:
              return null;
          }
        }
        break;
      
// ver ficatio 10
case 10:
  if (parseInt(taille[0].debutCours) === 10) {
    return (
      <>
        <td style={{ border: "none" }}></td>
        <td style={{ border: "none" }}></td>
        <td style={{ position: 'relative' }} colSpan={colSpanTd(10, fins)}>
          <span
            style={{
              fontSize: '11px',
              fontWeight: '600',
              color: '#000000',
              position: 'absolute',
              top: '24%',
              left: '40%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
            <span>{`${element.nomSalle.toUpperCase()}`}</span>
          </span>
        </td>
      </>
    );
  } else if (parseInt(taille[1].debutCours) === 10) {
    switch (debutCoursHour) {
      case 8:
        switch (finCoursHour) {
          case 9:
            return (
              <>
                <td style={{ border: "none" }}></td>
                <td style={{ position: 'relative' }} colSpan={colSpanTd(10, fins)}>
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: '600',
                      color: '#000000',
                      position: 'absolute',
                      top: '24%',
                      left: '40%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                    <span>{`${element.nomSalle.toUpperCase()}`}</span>
                  </span>
                </td>
              </>
            );
          case 10:
            return (
              <>
                <td style={{ position: 'relative' }} colSpan={colSpanTd(10, fins)}>
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: '600',
                      color: '#000000',
                      position: 'absolute',
                      top: '24%',
                      left: '40%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                    <span>{`${element.nomSalle.toUpperCase()}`}</span>
                  </span>
                </td>
              </>
            );
          default:
            return null;
        }

      case 9:
        switch (parseInt(taille[0].finCours.substring(0, 2))) {
          case 10:
            return (
              <>
                <td style={{ position: 'relative' }} colSpan={colSpanTd(10, fins)}>
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: '600',
                      color: '#000000',
                      position: 'absolute',
                      top: '24%',
                      left: '40%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                    <span>{`${element.nomSalle.toUpperCase()}`}</span>
                  </span>
                </td>
              </>
            );
          default:
            return null;
        }

      default:
        return null;
    }
  } else if (parseInt(taille[2].debutCours) === 10) {
    switch ( parseInt(taille[1].debutCours.substring(0, 2))) {
      case 8:
        switch ( parseInt(taille[1].finCours.substring(0, 2))) {
          case 9:
            return (
              <>
                <td style={{ border: "none" }}></td>
                <td style={{ position: 'relative' }} colSpan={colSpanTd(10, fins)}>
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: '600',
                      color: '#000000',
                      position: 'absolute',
                      top: '24%',
                      left: '40%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                    <span>{`${element.nomSalle.toUpperCase()}`}</span>
                  </span>
                </td>
              </>
            );
          case 10:
            return (
              <>
                <td style={{ position: 'relative' }} colSpan={colSpanTd(10, fins)}>
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: '600',
                      color: '#000000',
                      position: 'absolute',
                      top: '24%',
                      left: '40%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                    <span>{`${element.nomSalle.toUpperCase()}`}</span>
                  </span>
                </td>
              </>
            );
          default:
            return null;
        }

      case 9:
        switch ( parseInt(taille[1].finCours.substring(0, 2))) {
          case 10:
            return (
              <>
                <td style={{ position: 'relative' }} colSpan={colSpanTd(10, fins)}>
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: '600',
                      color: '#000000',
                      position: 'absolute',
                      top: '24%',
                      left: '40%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                    <span>{`${element.nomSalle.toUpperCase()}`}</span>
                  </span>
                </td>
              </>
            );
          default:
            return null;
        }

      default:
        return null;
    }
  }
  break;
// verification 11
case 11:
    if (parseInt(taille[0].debutCours) === 11) {
      return (
        <>
          <td style={{ border: "none" }}></td>
          <td style={{ border: "none" }}></td>
          <td style={{ border: "none" }}></td>
          <td style={{ position: 'relative' }} colSpan={colSpanTd(11, fins)}>
            <span
              style={{
                fontSize: '11px',
                fontWeight: '600',
                color: '#000000',
                position: 'absolute',
                top: '24%',
                left: '40%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
              <span>{`${element.nomSalle.toUpperCase()}`}</span>
            </span>
          </td>
        </>
      );
    } else if (parseInt(taille[1].debutCours) === 11) {
      switch (parseInt(taille[0].debutCours.substring(0, 2))) {
        case 8:
          switch (parseInt(taille[0].finCours.substring(0, 2))) {
            case 9:
              return (
                <>
                  <td style={{ border: "none" }}></td>
                  <td style={{ border: "none" }}></td>
                  <td style={{ position: 'relative' }} colSpan={colSpanTd(11, fins)}>
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: '600',
                        color: '#000000',
                        position: 'absolute',
                        top: '24%',
                        left: '40%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                      <span>{`${element.nomSalle.toUpperCase()}`}</span>
                    </span>
                  </td>
                </>
              );
            case 10:
              return (
                <>
                  <td style={{ border: "none" }}></td>
                  <td style={{ position: 'relative' }} colSpan={colSpanTd(11, fins)}>
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: '600',
                        color: '#000000',
                        position: 'absolute',
                        top: '24%',
                        left: '40%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                      <span>{`${element.nomSalle.toUpperCase()}`}</span>
                    </span>
                  </td>
                </>
              );
            case 11:
              return (
                <>
                  <td style={{ position: 'relative' }} colSpan={colSpanTd(11, fins)}>
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: '600',
                        color: '#000000',
                        position: 'absolute',
                        top: '24%',
                        left: '40%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                      <span>{`${element.nomSalle.toUpperCase()}`}</span>
                    </span>
                  </td>
                </>
              );
            default:
              return null;
          }
  
        case 9:
          switch (parseInt(taille[0].finCours.substring(0, 2))) {
            case 10:
              return (
                <>
                  <td style={{ border: "none" }}></td>
                  <td style={{ position: 'relative' }} colSpan={colSpanTd(11, fins)}>
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: '600',
                        color: '#000000',
                        position: 'absolute',
                        top: '24%',
                        left: '40%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                      <span>{`${element.nomSalle.toUpperCase()}`}</span>
                    </span>
                  </td>
                </>
              );
            case 11:
              return (
                <>
                  <td style={{ position: 'relative' }} colSpan={colSpanTd(11, fins)}>
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: '600',
                        color: '#000000',
                        position: 'absolute',
                        top: '24%',
                        left: '40%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                      <span>{`${element.nomSalle.toUpperCase()}`}</span>
                    </span>
                  </td>
                </>
              );
            default:
              return null;
          }
  
        case 10:
          switch (parseInt(taille[0].finCours.substring(0, 2))) {
            case 11:
              return (
                <>
                  <td style={{ position: 'relative' }} colSpan={colSpanTd(11, fins)}>
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: '600',
                        color: '#000000',
                        position: 'absolute',
                        top: '24%',
                        left: '40%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                      <span>{`${element.nomSalle.toUpperCase()}`}</span>
                    </span>
                  </td>
                </>
              );
            default:
              return null;
          }
  
        default:
          return null;
      }
    } else if (parseInt(taille[2].debutCours) === 11) {
      switch ( parseInt(taille[1].debutCours.substring(0, 2))) {
        case 8:
          switch ( parseInt(taille[1].finCours.substring(0, 2))) {
            case 9:
              return (
                <>
                  <td style={{ border: "none" }}></td>
                  <td style={{ border: "none" }}></td>
                  <td style={{ position: 'relative' }} colSpan={colSpanTd(11, fins)}>
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: '600',
                        color: '#000000',
                        position: 'absolute',
                        top: '24%',
                        left: '40%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                      <span>{`${element.nomSalle.toUpperCase()}`}</span>
                    </span>
                  </td>
                </>
              );
            case 10:
              return (
                <>
                  <td style={{ border: "none" }}></td>
                  <td style={{ position: 'relative' }} colSpan={colSpanTd(11, fins)}>
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: '600',
                        color: '#000000',
                        position: 'absolute',
                        top: '24%',
                        left: '40%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                      <span>{`${element.nomSalle.toUpperCase()}`}</span>
                    </span>
                  </td>
                </>
              );
            case 11:
              return (
                <>
                  <td style={{ position: 'relative' }} colSpan={colSpanTd(11, fins)}>
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: '600',
                        color: '#000000',
                        position: 'absolute',
                        top: '24%',
                        left: '40%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                      <span>{`${element.nomSalle.toUpperCase()}`}</span>
                    </span>
                  </td>
                </>
              );
            default:
              return null;
          }
  
        case 9:
          switch ( parseInt(taille[1].finCours.substring(0, 2))) {
            case 10:
              return (
                <>
                  <td style={{ border: "none" }}></td>
                  <td style={{ position: 'relative' }} colSpan={colSpanTd(11, fins)}>
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: '600',
                        color: '#000000',
                        position: 'absolute',
                        top: '24%',
                        left: '40%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                      <span>{`${element.nomSalle.toUpperCase()}`}</span>
                    </span>
                  </td>
                </>
              );
            case 11:
              return (
                <>
                  <td style={{ position: 'relative' }} colSpan={colSpanTd(11, fins)}>
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: '600',
                        color: '#000000',
                        position: 'absolute',
                        top: '24%',
                        left: '40%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                      <span>{`${element.nomSalle.toUpperCase()}`}</span>
                    </span>
                  </td>
                </>
              );
            default:
              return null;
          }
  
                case 10:
                  switch (parseInt(taille[1].finCours.substring(0, 2))) {
                    case 11:
                      return (
                        <>
                          <td style={{ position: 'relative' }} colSpan={colSpanTd(11, fins)}>
                          <span
    style={{
      fontSize: '11px',
      fontWeight: '600',
      color: '#000000',
      position: 'absolute',
      top: '24%',
      left: '40%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
    <span>{`${element.nomSalle.toUpperCase()}`}</span>
  </span>
                          </td>
                        </>
                      );
                    default:
                      return null;
                  }
              
                default:
                  return null;
              }
              
          }
    case 12:
            if (parseInt(taille[0].debutCours) === 12) {
                return (
                  <>
                        <td style={{ border: "none" }}></td>
                        <td style={{ border: "none" }}></td>
                        <td style={{ border: "none" }}></td>
                        <td style={{ border: "none" }}></td>
                        <td style={{ position: 'relative' }} colSpan={colSpanTd(12, fins)}>
                          <span
                            style={{
                              fontSize: '11px',
                              fontWeight: '600',
                              color: '#000000',
                              position: 'absolute',
                              top: '24%',
                              left: '40%',
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                            <span>{`${element.nomSalle.toUpperCase()}`}</span>
                          </span>
                        </td>
                  </>
                );
              }
              else  if (parseInt(taille[1].debutCours) === 12) {
                    switch (parseInt(taille[0].debutCours.substring(0, 2))) {
                      case 8:
                        switch (parseInt(taille[0].finCours.substring(0, 2))) {
                          case 9:
                            return (
                              <>
                                <td style={{ border: "none" }}></td>
                                <td style={{ border: "none" }}></td>
                                <td style={{ border: "none" }}></td>
                                <td style={{ position: 'relative' }} colSpan={colSpanTd(12, fins)}>
                                  <span
                                    style={{
                                      fontSize: '11px',
                                      fontWeight: '600',
                                      color: '#000000',
                                      position: 'absolute',
                                      top: '24%',
                                      left: '40%',
                                      display: 'flex',
                                      flexDirection: 'column',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                    }}
                                  >
                                    <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                                    <span>{`${element.nomSalle.toUpperCase()}`}</span>
                                  </span>
                                </td>
                              </>
                            );
                          case 10:
                            return (
                              <>
                                <td style={{ border: "none" }}></td>
                                <td style={{ border: "none" }}></td>
                                <td style={{ position: 'relative' }} colSpan={colSpanTd(12, fins)}>
                                  <span
                                    style={{
                                      fontSize: '11px',
                                      fontWeight: '600',
                                      color: '#000000',
                                      position: 'absolute',
                                      top: '24%',
                                      left: '40%',
                                      display: 'flex',
                                      flexDirection: 'column',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                    }}
                                  >
                                    <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                                    <span>{`${element.nomSalle.toUpperCase()}`}</span>
                                  </span>
                                </td>
                              </>
                            );
                          case 11:
                            return (
                              <>
                                <td style={{ border: "none" }}></td>
                                <td style={{ position: 'relative' }} colSpan={colSpanTd(12, fins)}>
                                  <span
                                    style={{
                                      fontSize: '11px',
                                      fontWeight: '600',
                                      color: '#000000',
                                      position: 'absolute',
                                      top: '24%',
                                      left: '40%',
                                      display: 'flex',
                                      flexDirection: 'column',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                    }}
                                  >
                                    <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                                    <span>{`${element.nomSalle.toUpperCase()}`}</span>
                                  </span>
                                </td>
                              </>
                            );
                          case 12:
                            return (
                              <>
                                <td style={{ position: 'relative' }} colSpan={colSpanTd(12, fins)}>
                                  <span
                                    style={{
                                      fontSize: '11px',
                                      fontWeight: '600',
                                      color: '#000000',
                                      position: 'absolute',
                                      top: '24%',
                                      left: '40%',
                                      display: 'flex',
                                      flexDirection: 'column',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                    }}
                                  >
                                    <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                                    <span>{`${element.nomSalle.toUpperCase()}`}</span>
                                  </span>
                                </td>
                              </>
                            );
                          default:
                            return null;
                        }
                  
                      case 9:
                        switch (parseInt(taille[0].finCours.substring(0, 2))) {
                          case 10:
                            return (
                              <>
                                <td style={{ border: "none" }}></td>
                                <td style={{ border: "none" }}></td>
                                <td style={{ position: 'relative' }} colSpan={colSpanTd(12, fins)}>
                                  <span
                                    style={{
                                      fontSize: '11px',
                                      fontWeight: '600',
                                      color: '#000000',
                                      position: 'absolute',
                                      top: '24%',
                                      left: '40%',
                                      display: 'flex',
                                      flexDirection: 'column',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                    }}
                                  >
                                    <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                                    <span>{`${element.nomSalle.toUpperCase()}`}</span>
                                  </span>
                                </td>
                              </>
                            );
                          case 11:
                            return (
                              <>
                                <td style={{ border: "none" }}></td>
                                <td style={{ position: 'relative' }} colSpan={colSpanTd(12, fins)}>
                                  <span
                                    style={{
                                      fontSize: '11px',
                                      fontWeight: '600',
                                      color: '#000000',
                                      position: 'absolute',
                                      top: '24%',
                                      left: '40%',
                                      display: 'flex',
                                      flexDirection: 'column',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                    }}
                                  >
                                    <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                                    <span>{`${element.nomSalle.toUpperCase()}`}</span>
                                  </span>
                                </td>
                              </>
                            );
                          case 12:
                            return (
                              <>
                                <td style={{ position: 'relative' }} colSpan={colSpanTd(12, fins)}>
                                  <span
                                    style={{
                                      fontSize: '11px',
                                      fontWeight: '600',
                                      color: '#000000',
                                      position: 'absolute',
                                      top: '24%',
                                      left: '40%',
                                      display: 'flex',
                                      flexDirection: 'column',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                    }}
                                  >
                                    <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                                    <span>{`${element.nomSalle.toUpperCase()}`}</span>
                                  </span>
                                </td>
                              </>
                            );
                          default:
                            return null;
                        }
                  
                      case 10:
                        switch (parseInt(taille[0].finCours.substring(0, 2))) {
                          case 11:
                            return (
                              <>
                                <td style={{ border: "none" }}></td>
                                <td style={{ position: 'relative' }} colSpan={colSpanTd(12, fins)}>
                                  <span
                                    style={{
                                      fontSize: '11px',
                                      fontWeight: '600',
                                      color: '#000000',
                                      position: 'absolute',
                                      top: '24%',
                                      left: '40%',
                                      display: 'flex',
                                      flexDirection: 'column',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                    }}
                                  >
                                    <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                                    <span>{`${element.nomSalle.toUpperCase()}`}</span>
                                  </span>
                                </td>
                              </>
                            );
                          case 12:
                            return (
                              <>
                                <td style={{ position: 'relative' }} colSpan={colSpanTd(12, fins)}>
                                  <span
                                    style={{
                                      fontSize: '11px',
                                      fontWeight: '600',
                                      color: '#000000',
                                      position: 'absolute',
                                      top: '24%',
                                      left: '40%',
                                      display: 'flex',
                                      flexDirection: 'column',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                    }}
                                  >
                                    <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                                    <span>{`${element.nomSalle.toUpperCase()}`}</span>
                                  </span>
                                </td>
                              </>
                            );
                          default:
                            return null;
                        }
                  
                      case 11:
                        switch (parseInt(taille[0].finCours.substring(0, 2))) {
                          case 12:
                            return (
                              <>
                                <td style={{ position: 'relative' }} colSpan={colSpanTd(12, fins)}>
                                  <span
                                    style={{
                                      fontSize: '11px',
                                      fontWeight: '600',
                                      color: '#000000',
                                      position: 'absolute',
                                      top: '24%',
                                      left: '40%',
                                      display: 'flex',
                                      flexDirection: 'column',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                    }}
                                  >
                                    <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                                    <span>{`${element.nomSalle.toUpperCase()}`}</span>
                                  </span>
                                </td>
                              </>
                            );
                        }
                  
                      default:
                        return null;
                    }
                  } 
                    else if (parseInt(taille[2].debutCours) === 12) {
                        switch (parseInt(taille[1].debutCours.substring(0, 2))) {
                          case 8:
                            switch (parseInt(taille[1].finCours.substring(0, 2))) {
                              case 9:
                                return (
                                  <>
                                    <td style={{ border: "none" }}></td>
                                    <td style={{ border: "none" }}></td>
                                    <td style={{ border: "none" }}></td>
                                    <td style={{ position: 'relative' }} colSpan={colSpanTd(12, fins)}>
                                      <span
                                        style={{
                                          fontSize: '11px',
                                          fontWeight: '600',
                                          color: '#000000',
                                          position: 'absolute',
                                          top: '24%',
                                          left: '40%',
                                          display: 'flex',
                                          flexDirection: 'column',
                                          alignItems: 'center',
                                          justifyContent: 'center',
                                        }}
                                      >
                                        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                                        <span>{`${element.nomSalle.toUpperCase()}`}</span>
                                      </span>
                                    </td>
                                  </>
                                );
                              case 10:
                                return (
                                  <>
                                    <td style={{ border: "none" }}></td>
                                    <td style={{ border: "none" }}></td>
                                    <td style={{ position: 'relative' }} colSpan={colSpanTd(12, fins)}>
                                      <span
                                        style={{
                                          fontSize: '11px',
                                          fontWeight: '600',
                                          color: '#000000',
                                          position: 'absolute',
                                          top: '24%',
                                          left: '40%',
                                          display: 'flex',
                                          flexDirection: 'column',
                                          alignItems: 'center',
                                          justifyContent: 'center',
                                        }}
                                      >
                                        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                                        <span>{`${element.nomSalle.toUpperCase()}`}</span>
                                      </span>
                                    </td>
                                  </>
                                );
                              case 11:
                                return (
                                  <>
                                    <td style={{ border: "none" }}></td>
                                    <td style={{ position: 'relative' }} colSpan={colSpanTd(12, fins)}>
                                      <span
                                        style={{
                                          fontSize: '11px',
                                          fontWeight: '600',
                                          color: '#000000',
                                          position: 'absolute',
                                          top: '24%',
                                          left: '40%',
                                          display: 'flex',
                                          flexDirection: 'column',
                                          alignItems: 'center',
                                          justifyContent: 'center',
                                        }}
                                      >
                                        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                                        <span>{`${element.nomSalle.toUpperCase()}`}</span>
                                      </span>
                                    </td>
                                  </>
                                );
                              case 12:
                                return (
                                  <>
                                    <td style={{ position: 'relative' }} colSpan={colSpanTd(12, fins)}>
                                      <span
                                        style={{
                                          fontSize: '11px',
                                          fontWeight: '600',
                                          color: '#000000',
                                          position: 'absolute',
                                          top: '24%',
                                          left: '40%',
                                          display: 'flex',
                                          flexDirection: 'column',
                                          alignItems: 'center',
                                          justifyContent: 'center',
                                        }}
                                      >
                                        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                                        <span>{`${element.nomSalle.toUpperCase()}`}</span>
                                      </span>
                                    </td>
                                  </>
                                );
                              default:
                                return null;
                            }
                      
                          case 9:
                            switch (parseInt(taille[1].finCours.substring(0, 2))) {
                              case 10:
                                return (
                                  <>
                                    <td style={{ border: "none" }}></td>
                                    <td style={{ border: "none" }}></td>
                                    <td style={{ position: 'relative' }} colSpan={colSpanTd(12, fins)}>
                                      <span
                                        style={{
                                          fontSize: '11px',
                                          fontWeight: '600',
                                          color: '#000000',
                                          position: 'absolute',
                                          top: '24%',
                                          left: '40%',
                                          display: 'flex',
                                          flexDirection: 'column',
                                          alignItems: 'center',
                                          justifyContent: 'center',
                                        }}
                                      >
                                        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                                        <span>{`${element.nomSalle.toUpperCase()}`}</span>
                                      </span>
                                    </td>
                                  </>
                                );
                              case 11:
                                return (
                                  <>
                                    <td style={{ border: "none" }}></td>
                                    <td style={{ position: 'relative' }} colSpan={colSpanTd(12, fins)}>
                                      <span
                                        style={{
                                          fontSize: '11px',
                                          fontWeight: '600',
                                          color: '#000000',
                                          position: 'absolute',
                                          top: '24%',
                                          left: '40%',
                                          display: 'flex',
                                          flexDirection: 'column',
                                          alignItems: 'center',
                                          justifyContent: 'center',
                                        }}
                                      >
                                        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                                        <span>{`${element.nomSalle.toUpperCase()}`}</span>
                                      </span>
                                    </td>
                                  </>
                                );
                              case 12:
                                return (
                                  <>
                                    <td style={{ position: 'relative' }} colSpan={colSpanTd(12, fins)}>
                                      <span
                                        style={{
                                          fontSize: '11px',
                                          fontWeight: '600',
                                          color: '#000000',
                                          position: 'absolute',
                                          top: '24%',
                                          left: '40%',
                                          display: 'flex',
                                          flexDirection: 'column',
                                          alignItems: 'center',
                                          justifyContent: 'center',
                                        }}
                                      >
                                        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                                        <span>{`${element.nomSalle.toUpperCase()}`}</span>
                                      </span>
                                    </td>
                                  </>
                                );
                              default:
                                return null;
                            }
                      
                          case 10:
                            switch (parseInt(taille[1].finCours.substring(0, 2))) {
                              case 11:
                                return (
                                  <>
                                    <td style={{ border: "none" }}></td>
                                    <td style={{ position: 'relative' }} colSpan={colSpanTd(12, fins)}>
                                      <span
                                        style={{
                                          fontSize: '11px',
                                          fontWeight: '600',
                                          color: '#000000',
                                          position: 'absolute',
                                          top: '24%',
                                          left: '40%',
                                          display: 'flex',
                                          flexDirection: 'column',
                                          alignItems: 'center',
                                          justifyContent: 'center',
                                        }}
                                      >
                                        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                                        <span>{`${element.nomSalle.toUpperCase()}`}</span>
                                      </span>
                                    </td>
                                  </>
                                );
                              case 12:
                                return (
                                  <>
                                    <td style={{ position: 'relative' }} colSpan={colSpanTd(12, fins)}>
                                      <span
                                        style={{
                                          fontSize: '11px',
                                          fontWeight: '600',
                                          color: '#000000',
                                          position: 'absolute',
                                          top: '24%',
                                          left: '40%',
                                          display: 'flex',
                                          flexDirection: 'column',
                                          alignItems: 'center',
                                          justifyContent: 'center',
                                        }}
                                      >
                                        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                                        <span>{`${element.nomSalle.toUpperCase()}`}</span>
                                      </span>
                                    </td>
                                  </>
                                );
                              default:
                                return null;
                            }
                      
                          case 11:
                            switch (parseInt(taille[1].finCours.substring(0, 2))) {
                              case 12:
                                return (
                                  <>
                                    <td style={{ position: 'relative' }} colSpan={colSpanTd(12, fins)}>
                                      <span
                                        style={{
                                          fontSize: '11px',
                                          fontWeight: '600',
                                          color: '#000000',
                                          position: 'absolute',
                                          top: '24%',
                                          left: '40%',
                                          display: 'flex',
                                          flexDirection: 'column',
                                          alignItems: 'center',
                                          justifyContent: 'center',
                                        }}
                                      >
                                        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                                        <span>{`${element.nomSalle.toUpperCase()}`}</span>
                                      </span>
                                    </td>
                                  </>
                                );
                            }
                      
                          default:
                            return null;
                        }
      }
      case 13:
        if (parseInt(taille[0].debutCours) === 13) {
            return (
              <>
                    <td style={{ border: "none" }}></td>
                    <td style={{ border: "none" }}></td>
                    <td style={{ border: "none" }}></td>
                    <td style={{ border: "none" }}></td>
                    <td style={{ border: "none" }}></td>
                    <td style={{ position: 'relative' }} colSpan={colSpanTd(13, fins)}>
                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: '600',
                          color: '#000000',
                          position: 'absolute',
                          top: '24%',
                          left: '40%',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                        <span>{`${element.nomSalle.toUpperCase()}`}</span>
                      </span>
                    </td>
              </>
            );
          }
          else  if (parseInt(taille[1].debutCours) === 13) {
            switch (parseInt(taille[0].debutCours.substring(0, 2))) {
                case 8:
                  switch (parseInt(taille[0].finCours.substring(0, 2))) {
                    case 9:
                      return (
                        <>
                          <td style={{ border: "none" }}></td>
                          <td style={{ border: "none" }}></td>
                          <td style={{ border: "none" }}></td>
                          <td style={{ border: "none" }}></td>
                          <td style={{ position: 'relative' }} colSpan={colSpanTd(13, fins)}>
                            <span
                              style={{
                                fontSize: '11px',
                                fontWeight: '600',
                                color: '#000000',
                                position: 'absolute',
                                top: '24%',
                                left: '40%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                              <span>{`${element.nomSalle.toUpperCase()}`}</span>
                            </span>
                          </td>
                        </>
                      );
                    case 10:
                      return (
                        <>
                          <td style={{ border: "none" }}></td>
                          <td style={{ border: "none" }}></td>
                          <td style={{ border: "none" }}></td>
                          <td style={{ position: 'relative' }} colSpan={colSpanTd(13, fins)}>
                            <span
                              style={{
                                fontSize: '11px',
                                fontWeight: '600',
                                color: '#000000',
                                position: 'absolute',
                                top: '24%',
                                left: '40%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                              <span>{`${element.nomSalle.toUpperCase()}`}</span>
                            </span>
                          </td>
                        </>
                      );
                    case 11:
                      return (
                        <>
                          <td style={{ border: "none" }}></td>
                          <td style={{ border: "none" }}></td>
                          <td style={{ position: 'relative' }} colSpan={colSpanTd(13, fins)}>
                            <span
                              style={{
                                fontSize: '11px',
                                fontWeight: '600',
                                color: '#000000',
                                position: 'absolute',
                                top: '24%',
                                left: '40%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                              <span>{`${element.nomSalle.toUpperCase()}`}</span>
                            </span>
                          </td>
                        </>
                      );
                    case 12:
                      return (
                        <>
                          <td style={{ border: "none" }}></td>
                          <td style={{ position: 'relative' }} colSpan={colSpanTd(13, fins)}>
                            <span
                              style={{
                                fontSize: '11px',
                                fontWeight: '600',
                                color: '#000000',
                                position: 'absolute',
                                top: '24%',
                                left: '40%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                              <span>{`${element.nomSalle.toUpperCase()}`}</span>
                            </span>
                          </td>
                        </>
                      );
                    case 13:
                      return (
                        <>
                          <td style={{ position: 'relative' }} colSpan={colSpanTd(13, fins)}>
                            <span
                              style={{
                                fontSize: '11px',
                                fontWeight: '600',
                                color: '#000000',
                                position: 'absolute',
                                top: '24%',
                                left: '40%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                              <span>{`${element.nomSalle.toUpperCase()}`}</span>
                            </span>
                          </td>
                        </>
                      );
                    default:
                      return null;
                  }
              
                case 9:
                  switch (parseInt(taille[0].finCours.substring(0, 2))) {
                    case 10:
                      return (
                        <>
                          <td style={{ border: "none" }}></td>
                          <td style={{ border: "none" }}></td>
                          <td style={{ border: "none" }}></td>
                          <td style={{ position: 'relative' }} colSpan={colSpanTd(13, fins)}>
                            <span
                              style={{
                                fontSize: '11px',
                                fontWeight: '600',
                                color: '#000000',
                                position: 'absolute',
                                top: '24%',
                                left: '40%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                              <span>{`${element.nomSalle.toUpperCase()}`}</span>
                            </span>
                          </td>
                        </>
                      );
                    case 11:
                      return (
                        <>
                          <td style={{ border: "none" }}></td>
                          <td style={{ border: "none" }}></td>
                          <td style={{ position: 'relative' }} colSpan={colSpanTd(13, fins)}>
                            <span
                              style={{
                                fontSize: '11px',
                                fontWeight: '600',
                                color: '#000000',
                                position: 'absolute',
                                top: '24%',
                                left: '40%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                              <span>{`${element.nomSalle.toUpperCase()}`}</span>
                            </span>
                          </td>
                        </>
                      );
                    case 12:
                      return (
                        <>
                          <td style={{ border: "none" }}></td>
                          <td style={{ position: 'relative' }} colSpan={colSpanTd(13, fins)}>
                            <span
                              style={{
                                fontSize: '11px',
                                fontWeight: '600',
                                color: '#000000',
                                position: 'absolute',
                                top: '24%',
                                left: '40%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                              <span>{`${element.nomSalle.toUpperCase()}`}</span>
                            </span>
                          </td>
                        </>
                      );
                    case 13:
                      return (
                        <>
                          <td style={{ position: 'relative' }} colSpan={colSpanTd(13, fins)}>
                            <span
                              style={{
                                fontSize: '11px',
                                fontWeight: '600',
                                color: '#000000',
                                position: 'absolute',
                                top: '24%',
                                left: '40%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                              <span>{`${element.nomSalle.toUpperCase()}`}</span>
                            </span>
                          </td>
                        </>
                      );
                    default:
                      return null;
                  }
              
                case 10:
                  switch (parseInt(taille[0].finCours.substring(0, 2))) {
                    case 11:
                      return (
                        <>
                          <td style={{ border: "none" }}></td>
                          <td style={{ border: "none" }}></td>
                          <td style={{ position: 'relative' }} colSpan={colSpanTd(13, fins)}>
                            <span
                              style={{
                                fontSize: '11px',
                                fontWeight: '600',
                                color: '#000000',
                                position: 'absolute',
                                top: '24%',
                                left: '40%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                              <span>{`${element.nomSalle.toUpperCase()}`}</span>
                            </span>
                          </td>
                        </>
                      );
                    case 12:
                      return (
                        <>
                          <td style={{ border: "none" }}></td>
                          <td style={{ position: 'relative' }} colSpan={colSpanTd(13, fins)}>
                            <span
                              style={{
                                fontSize: '11px',
                                fontWeight: '600',
                                color: '#000000',
                                position: 'absolute',
                                top: '24%',
                                left: '40%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                              <span>{`${element.nomSalle.toUpperCase()}`}</span>
                            </span>
                          </td>
                        </>
                      );
                    case 13:
                      return (
                        <>
                          <td style={{ position: 'relative' }} colSpan={colSpanTd(13, fins)}>
                            <span
                              style={{
                                fontSize: '11px',
                                fontWeight: '600',
                                color: '#000000',
                                position: 'absolute',
                                top: '24%',
                                left: '40%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                              <span>{`${element.nomSalle.toUpperCase()}`}</span>
                            </span>
                          </td>
                        </>
                      );
                    default:
                      return null;
                  }
              
                case 11:
                  switch (parseInt(taille[0].finCours.substring(0, 2))) {
                    case 12:
                      return (
                        <>
                          <td style={{ border: "none" }}></td>
                          <td style={{ position: 'relative' }} colSpan={colSpanTd(13, fins)}>
                            <span
                              style={{
                                fontSize: '11px',
                                fontWeight: '600',
                                color: '#000000',
                                position: 'absolute',
                                top: '24%',
                                left: '40%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                              <span>{`${element.nomSalle.toUpperCase()}`}</span>
                            </span>
                          </td>
                        </>
                      );
                    case 13:
                      return (
                        <>
                          <td style={{ position: 'relative' }} colSpan={colSpanTd(13, fins)}>
                            <span
                              style={{
                                fontSize: '11px',
                                fontWeight: '600',
                                color: '#000000',
                                position: 'absolute',
                                top: '24%',
                                left: '40%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                              <span>{`${element.nomSalle.toUpperCase()}`}</span>
                            </span>
                          </td>
                        </>
                      );
                    default:
                      return null;
                  }
              
                case 12:
                  switch (parseInt(taille[0].finCours.substring(0, 2))) {
                    case 13:
                      return (
                        <>
                          <td style={{ position: 'relative' }} colSpan={colSpanTd(13, fins)}>
                            <span
                              style={{
                                fontSize: '11px',
                                fontWeight: '600',
                                color: '#000000',
                                position: 'absolute',
                                top: '24%',
                                left: '40%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                              <span>{`${element.nomSalle.toUpperCase()}`}</span>
                            </span>
                          </td>
                        </>
                      );
                    default:
                      return null;
                  }
              
                default:
                  return null;
              }
              
          } if (parseInt(taille[2].debutCours) === 13) {
            switch (parseInt(taille[1].debutCours.substring(0, 2))) {
                case 8:
                  switch (parseInt(taille[1].finCours.substring(0, 2))) {
                    case 9:
                      return (
                        <>
                          <td style={{ border: "none" }}></td>
                          <td style={{ border: "none" }}></td>
                          <td style={{ border: "none" }}></td>
                          <td style={{ border: "none" }}></td>
                          <td style={{ position: 'relative' }} colSpan={colSpanTd(13, fins)}>
                            <span
                              style={{
                                fontSize: '11px',
                                fontWeight: '600',
                                color: '#000000',
                                position: 'absolute',
                                top: '24%',
                                left: '40%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                              <span>{`${element.nomSalle.toUpperCase()}`}</span>
                            </span>
                          </td>
                        </>
                      );
                    case 10:
                      return (
                        <>
                          <td style={{ border: "none" }}></td>
                          <td style={{ border: "none" }}></td>
                          <td style={{ border: "none" }}></td>
                          <td style={{ position: 'relative' }} colSpan={colSpanTd(13, fins)}>
                            <span
                              style={{
                                fontSize: '11px',
                                fontWeight: '600',
                                color: '#000000',
                                position: 'absolute',
                                top: '24%',
                                left: '40%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                              <span>{`${element.nomSalle.toUpperCase()}`}</span>
                            </span>
                          </td>
                        </>
                      );
                    case 11:
                      return (
                        <>
                          <td style={{ border: "none" }}></td>
                          <td style={{ border: "none" }}></td>
                          <td style={{ position: 'relative' }} colSpan={colSpanTd(13, fins)}>
                            <span
                              style={{
                                fontSize: '11px',
                                fontWeight: '600',
                                color: '#000000',
                                position: 'absolute',
                                top: '24%',
                                left: '40%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                              <span>{`${element.nomSalle.toUpperCase()}`}</span>
                            </span>
                          </td>
                        </>
                      );
                    case 12:
                      return (
                        <>
                          <td style={{ border: "none" }}></td>
                          <td style={{ position: 'relative' }} colSpan={colSpanTd(13, fins)}>
                            <span
                              style={{
                                fontSize: '11px',
                                fontWeight: '600',
                                color: '#000000',
                                position: 'absolute',
                                top: '24%',
                                left: '40%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                              <span>{`${element.nomSalle.toUpperCase()}`}</span>
                            </span>
                          </td>
                        </>
                      );
                    case 13:
                      return (
                        <>
                          <td style={{ position: 'relative' }} colSpan={colSpanTd(13, fins)}>
                            <span
                              style={{
                                fontSize: '11px',
                                fontWeight: '600',
                                color: '#000000',
                                position: 'absolute',
                                top: '24%',
                                left: '40%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                              <span>{`${element.nomSalle.toUpperCase()}`}</span>
                            </span>
                          </td>
                        </>
                      );
                    default:
                      return null;
                  }
              
                case 9:
                  switch (parseInt(taille[1].finCours.substring(0, 2))) {
                    case 10:
                      return (
                        <>
                          <td style={{ border: "none" }}></td>
                          <td style={{ border: "none" }}></td>
                          <td style={{ border: "none" }}></td>
                          <td style={{ position: 'relative' }} colSpan={colSpanTd(13, fins)}>
                            <span
                              style={{
                                fontSize: '11px',
                                fontWeight: '600',
                                color: '#000000',
                                position: 'absolute',
                                top: '24%',
                                left: '40%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                              <span>{`${element.nomSalle.toUpperCase()}`}</span>
                            </span>
                          </td>
                        </>
                      );
                    case 11:
                      return (
                        <>
                          <td style={{ border: "none" }}></td>
                          <td style={{ border: "none" }}></td>
                          <td style={{ position: 'relative' }} colSpan={colSpanTd(13, fins)}>
                            <span
                              style={{
                                fontSize: '11px',
                                fontWeight: '600',
                                color: '#000000',
                                position: 'absolute',
                                top: '24%',
                                left: '40%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                              <span>{`${element.nomSalle.toUpperCase()}`}</span>
                            </span>
                          </td>
                        </>
                      );
                    case 12:
                      return (
                        <>
                          <td style={{ border: "none" }}></td>
                          <td style={{ position: 'relative' }} colSpan={colSpanTd(13, fins)}>
                            <span
                              style={{
                                fontSize: '11px',
                                fontWeight: '600',
                                color: '#000000',
                                position: 'absolute',
                                top: '24%',
                                left: '40%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                              <span>{`${element.nomSalle.toUpperCase()}`}</span>
                            </span>
                          </td>
                        </>
                      );
                    case 13:
                      return (
                        <>
                          <td style={{ position: 'relative' }} colSpan={colSpanTd(13, fins)}>
                            <span
                              style={{
                                fontSize: '11px',
                                fontWeight: '600',
                                color: '#000000',
                                position: 'absolute',
                                top: '24%',
                                left: '40%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                              <span>{`${element.nomSalle.toUpperCase()}`}</span>
                            </span>
                          </td>
                        </>
                      );
                    default:
                      return null;
                  }
              
                case 10:
                  switch (parseInt(taille[1].finCours.substring(0, 2))) {
                    case 11:
                      return (
                        <>
                          <td style={{ border: "none" }}></td>
                          <td style={{ border: "none" }}></td>
                          <td style={{ position: 'relative' }} colSpan={colSpanTd(13, fins)}>
                            <span
                              style={{
                                fontSize: '11px',
                                fontWeight: '600',
                                color: '#000000',
                                position: 'absolute',
                                top: '24%',
                                left: '40%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                              <span>{`${element.nomSalle.toUpperCase()}`}</span>
                            </span>
                          </td>
                        </>
                      );
                    case 12:
                      return (
                        <>
                          <td style={{ border: "none" }}></td>
                          <td style={{ position: 'relative' }} colSpan={colSpanTd(13, fins)}>
                            <span
                              style={{
                                fontSize: '11px',
                                fontWeight: '600',
                                color: '#000000',
                                position: 'absolute',
                                top: '24%',
                                left: '40%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                              <span>{`${element.nomSalle.toUpperCase()}`}</span>
                            </span>
                          </td>
                        </>
                      );
                    case 13:
                      return (
                        <>
                          <td style={{ position: 'relative' }} colSpan={colSpanTd(13, fins)}>
                            <span
                              style={{
                                fontSize: '11px',
                                fontWeight: '600',
                                color: '#000000',
                                position: 'absolute',
                                top: '24%',
                                left: '40%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                              <span>{`${element.nomSalle.toUpperCase()}`}</span>
                            </span>
                          </td>
                        </>
                      );
                    default:
                      return null;
                  }
              
                case 11:
                  switch (parseInt(taille[1].finCours.substring(0, 2))) {
                    case 12:
                      return (
                        <>
                          <td style={{ border: "none" }}></td>
                          <td style={{ position: 'relative' }} colSpan={colSpanTd(13, fins)}>
                            <span
                              style={{
                                fontSize: '11px',
                                fontWeight: '600',
                                color: '#000000',
                                position: 'absolute',
                                top: '24%',
                                left: '40%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                              <span>{`${element.nomSalle.toUpperCase()}`}</span>
                            </span>
                          </td>
                        </>
                      );
                    case 13:
                      return (
                        <>
                          <td style={{ position: 'relative' }} colSpan={colSpanTd(13, fins)}>
                            <span
                              style={{
                                fontSize: '11px',
                                fontWeight: '600',
                                color: '#000000',
                                position: 'absolute',
                                top: '24%',
                                left: '40%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                              <span>{`${element.nomSalle.toUpperCase()}`}</span>
                            </span>
                          </td>
                        </>
                      );
                    default:
                      return null;
                  }
              
                case 12:
                  switch (parseInt(taille[1].finCours.substring(0, 2))) {
                    case 13:
                      return (
                        <>
                          <td style={{ position: 'relative' }} colSpan={colSpanTd(13, fins)}>
                            <span
                              style={{
                                fontSize: '11px',
                                fontWeight: '600',
                                color: '#000000',
                                position: 'absolute',
                                top: '24%',
                                left: '40%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
                              <span>{`${element.nomSalle.toUpperCase()}`}</span>
                            </span>
                          </td>
                        </>
                      );
                    default:
                      return null;
                  }
              
                default:
                  return null;
              }
              
          } 
          
        // ******************* 14************
       
            case 14:
      if(parseInt(taille[0].debutCours)===14){
        return (
          <>
           <td style={{border:"none"}}></td>
           <td style={{border:"none"}}></td>
           <td style={{border:"none"}}></td>
          <td style={{border:"none"}}></td>
          <td style={{border:"none"}}></td>
          <td style={{border:"none"}}></td>
          <td  style={{ position: 'relative' }} colSpan={colSpanTd(14,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
          </>
        )  
      }
      else if(parseInt(taille[1].debutCours)===14){
      switch(parseInt(taille[0].debutCours.substring(0, 2))){
          case 8:
             
                   switch(parseInt(taille[0].finCours.substring(0, 2))){
                       case 9:
                             return (
                               <>
     
                             
                               <td style={{border:"none"}}></td>
                               <td style={{border:"none"}}></td>
                               <td style={{border:"none"}}></td>
                               <td style={{border:"none"}}></td>
                               <td style={{border:"none"}}></td>
                               <td  style={{ position: 'relative' }} colSpan={colSpanTd(14,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                             </>
                             )
                             case 10:
                               return (
                                 <>
                                 <td style={{border:"none"}}></td>
                                 <td style={{border:"none"}}></td>
                                 <td style={{border:"none"}}></td>
                                 <td style={{border:"none"}}></td>
                                 <td  style={{ position: 'relative' }} colSpan={colSpanTd(14,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                               </>
                               )
                               case 11:
                                 return (
                                   <>
                                   <td style={{border:"none"}}></td>
                                   <td style={{border:"none"}}></td>
                                   <td style={{border:"none"}}></td>
                                   <td  style={{ position: 'relative' }} colSpan={colSpanTd(14,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                 </>
                                 )
                                 case 12:
                                 return (
                                   <>
                                   <td style={{border:"none"}}></td>
                                   <td style={{border:"none"}}></td>
                                   <td  style={{ position: 'relative' }} colSpan={colSpanTd(14,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                 </>
                                 )
                                 case 13:
                                   return (
                                     <>
                                     <td style={{border:"none"}}></td>
                                     <td  style={{ position: 'relative' }} colSpan={colSpanTd(14,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                   </>
                                   )
                                   case 14:
                                     return (
                                       <>
                                      <td  style={{ position: 'relative' }} colSpan={colSpanTd(14,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                     </>
                                     )
                       default:
                           return null
                   } 
     
       case 9:
                switch(parseInt(taille[0].finCours.substring(0, 2))){
                    case 10:
                          return (
                            <>
                            <td style={{border:"none"}}></td>
                            <td style={{border:"none"}}></td>
                            <td style={{border:"none"}}></td>
                            <td style={{border:"none"}}></td>
                            <td  style={{ position: 'relative' }} colSpan={colSpanTd(14,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                          </>
                          )
                          case 11:
                            return (
                              <>
                              <td style={{border:"none"}}></td>
                              <td style={{border:"none"}}></td>
                              <td style={{border:"none"}}></td>
                             
                              <td  style={{ position: 'relative' }} colSpan={colSpanTd(14,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                            </>
                            )
                            case 12:
                              return (
                                <>
                                <td style={{border:"none"}}></td>
                                <td style={{border:"none"}}></td>
                               
                                <td  style={{ position: 'relative' }} colSpan={colSpanTd(14,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                              </>
                              )
                              case 13:
                              return (
                                <>
                               <td style={{border:"none"}}></td>
                               <td  style={{ position: 'relative' }} colSpan={colSpanTd(14,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                              </>
                              )
                              case 14:
                                return (
                                  <>
                                <td  style={{ position: 'relative' }} colSpan={colSpanTd(14,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                </>
                                )
                                
                    default:
                        return null
                } 
  
     case 10:
              switch(parseInt(taille[0].finCours.substring(0, 2))){
                  case 11:
                        return (
                          <>
                         
                          <td style={{border:"none"}}></td>
                          <td style={{border:"none"}}></td>
                          <td style={{border:"none"}}></td>
                          <td  style={{ position: 'relative' }} colSpan={colSpanTd(14,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                        </>
                        )
                        case 12:
                          return (
                            <>
                            
                            <td style={{border:"none"}}></td>
                            <td style={{border:"none"}}></td>
                           
                            <td  style={{ position: 'relative' }} colSpan={colSpanTd(14,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                          </>
                          )
                          case 13:
                            return (
                              <>
                             
                              <td style={{border:"none"}}></td>
                             
                              <td  style={{ position: 'relative' }} colSpan={colSpanTd(14,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                            </>
                            )
                            case 14:
                            return (
                              <>
                            <td  style={{ position: 'relative' }} colSpan={colSpanTd(14,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                            </>
                            )
                            
                              
                  default:
                      return null
              } 
   case 11:
            switch(parseInt(taille[0].finCours.substring(0, 2))){
                case 12:
                      return (
                        <>
                       
                       
                        <td style={{border:"none"}}></td>
                        <td style={{border:"none"}}></td>
                        <td  style={{ position: 'relative' }} colSpan={colSpanTd(14,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                      </>
                      )
                      case 13:
                        return (
                          <>
                          
                          
                          <td style={{border:"none"}}></td>
                         
                          <td  style={{ position: 'relative' }} colSpan={colSpanTd(14,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                        </>
                        )
                        case 14:
                          return (
                            <>
                           
                            
                           <td  style={{ position: 'relative' }} colSpan={colSpanTd(14,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                          </>
                          )
                         
                          
                            
                default:
                    return null
            } 
     
        case 12:
            switch(parseInt(taille[0].finCours.substring(0, 2))){
                case 13:
                      return (
                        <>
                       
                       
                       
                        <td style={{border:"none"}}></td>
                        
                        <td  style={{ position: 'relative' }} colSpan={colSpanTd(14,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                      </>
                      )
                      case 14:
                        return (
                          <>
                          
                         
                          <td  style={{ position: 'relative' }} colSpan={colSpanTd(14,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                        </>
                        )
                        
                           
                          
                            
                default:
                    return null
            } 
            case 13:
             switch(parseInt(taille[0].finCours.substring(0, 2))){
                case 14:
                      return (
                        <>
                       
                       
                       <td  style={{ position: 'relative' }} colSpan={colSpanTd(14,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                      </>
                      )
                          
                            
                default:
                    return null
            } 
    
    default :
      return null
    }
  }else  if(parseInt(taille[2].debutCours)===14){
    switch(parseInt(taille[1].debutCours.substring(0, 2))){
        case 8:
           
                 switch(parseInt(taille[1].finCours.substring(0, 2))){
                     case 9:
                           return (
                             <>
   
                           
                             <td style={{border:"none"}}></td>
                             <td style={{border:"none"}}></td>
                             <td style={{border:"none"}}></td>
                             <td style={{border:"none"}}></td>
                             <td style={{border:"none"}}></td>
                             <td  style={{ position: 'relative' }} colSpan={colSpanTd(14,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                           </>
                           )
                           case 10:
                             return (
                               <>
                               <td style={{border:"none"}}></td>
                               <td style={{border:"none"}}></td>
                               <td style={{border:"none"}}></td>
                               <td style={{border:"none"}}></td>
                               <td  style={{ position: 'relative' }} colSpan={colSpanTd(14,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                             </>
                             )
                             case 11:
                               return (
                                 <>
                                 <td style={{border:"none"}}></td>
                                 <td style={{border:"none"}}></td>
                                 <td style={{border:"none"}}></td>
                                 <td  style={{ position: 'relative' }} colSpan={colSpanTd(14,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                               </>
                               )
                               case 12:
                               return (
                                 <>
                                 <td style={{border:"none"}}></td>
                                 <td style={{border:"none"}}></td>
                                 <td  style={{ position: 'relative' }} colSpan={colSpanTd(14,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                               </>
                               )
                               case 13:
                                 return (
                                   <>
                                   <td style={{border:"none"}}></td>
                                   <td  style={{ position: 'relative' }} colSpan={colSpanTd(14,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                 </>
                                 )
                                 case 14:
                                   return (
                                     <>
                                    <td  style={{ position: 'relative' }} colSpan={colSpanTd(14,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                   </>
                                   )
                     default:
                         return null
                 } 
   
     case 9:
              switch(parseInt(taille[1].finCours.substring(0, 2))){
                  case 10:
                        return (
                          <>
                          <td style={{border:"none"}}></td>
                          <td style={{border:"none"}}></td>
                          <td style={{border:"none"}}></td>
                          <td style={{border:"none"}}></td>
                          <td  style={{ position: 'relative' }} colSpan={colSpanTd(14,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                        </>
                        )
                        case 11:
                          return (
                            <>
                            <td style={{border:"none"}}></td>
                            <td style={{border:"none"}}></td>
                            <td style={{border:"none"}}></td>
                           
                            <td  style={{ position: 'relative' }} colSpan={colSpanTd(14,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                          </>
                          )
                          case 12:
                            return (
                              <>
                              <td style={{border:"none"}}></td>
                              <td style={{border:"none"}}></td>
                             
                              <td  style={{ position: 'relative' }} colSpan={colSpanTd(14,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                            </>
                            )
                            case 13:
                            return (
                              <>
                             <td style={{border:"none"}}></td>
                             <td  style={{ position: 'relative' }} colSpan={colSpanTd(14,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                            </>
                            )
                            case 14:
                              return (
                                <>
                              <td  style={{ position: 'relative' }} colSpan={colSpanTd(14,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                              </>
                              )
                              
                  default:
                      return null
              } 

   case 10:
            switch(parseInt(taille[1].finCours.substring(0, 2))){
                case 11:
                      return (
                        <>
                       
                        <td style={{border:"none"}}></td>
                        <td style={{border:"none"}}></td>
                        <td style={{border:"none"}}></td>
                        <td  style={{ position: 'relative' }} colSpan={colSpanTd(14,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                      </>
                      )
                      case 12:
                        return (
                          <>
                          
                          <td style={{border:"none"}}></td>
                          <td style={{border:"none"}}></td>
                         
                          <td  style={{ position: 'relative' }} colSpan={colSpanTd(14,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                        </>
                        )
                        case 13:
                          return (
                            <>
                           
                            <td style={{border:"none"}}></td>
                           
                            <td  style={{ position: 'relative' }} colSpan={colSpanTd(14,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                          </>
                          )
                          case 14:
                          return (
                            <>
                          <td  style={{ position: 'relative' }} colSpan={colSpanTd(14,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                          </>
                          )
                          
                            
                default:
                    return null
            } 
 case 11:
          switch(parseInt(taille[1].finCours.substring(0, 2))){
              case 12:
                    return (
                      <>
                     
                     
                      <td style={{border:"none"}}></td>
                      <td style={{border:"none"}}></td>
                      <td  style={{ position: 'relative' }} colSpan={colSpanTd(14,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                    </>
                    )
                    case 13:
                      return (
                        <>
                        
                        
                        <td style={{border:"none"}}></td>
                       
                        <td  style={{ position: 'relative' }} colSpan={colSpanTd(14,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                      </>
                      )
                      case 14:
                        return (
                          <>
                         
                          
                         <td  style={{ position: 'relative' }} colSpan={colSpanTd(14,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                        </>
                        )
                       
                        
                          
              default:
                  return null
          } 
   
      case 12:
          switch(parseInt(taille[1].finCours.substring(0, 2))){
              case 13:
                    return (
                      <>
                     
                     
                     
                      <td style={{border:"none"}}></td>
                      
                      <td  style={{ position: 'relative' }} colSpan={colSpanTd(14,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                    </>
                    )
                    case 14:
                      return (
                        <>
                        
                       
                        <td  style={{ position: 'relative' }} colSpan={colSpanTd(14,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                      </>
                      )
                      
                         
                        
                          
              default:
                  return null
          } 
          case 13:
           switch(parseInt(taille[1].finCours.substring(0, 2))){
              case 14:
                    return (
                      <>
                     
                     
                     <td  style={{ position: 'relative' }} colSpan={colSpanTd(14,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                    </>
                    )
                        
                          
              default:
                  return null
          } 
  
  default :
    return null
 }
} 
case 15:
       
if(parseInt(taille[0].debutCours)===15){
  return (
    <>
     <td style={{border:"none"}}></td>
     <td style={{border:"none"}}></td>
     <td style={{border:"none"}}></td>
    <td style={{border:"none"}}></td>
    <td style={{border:"none"}}></td>
    <td style={{border:"none"}}></td>
    <td style={{border:"none"}}></td>
    <td  style={{ position: 'relative' }} colSpan={colSpanTd(15,fins)}>
<span
style={{
fontSize: '11px',
fontWeight: '600',
color: '#000000',
position: 'absolute',
top: '24%',
left: '40%',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
}}
>
<span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
<span>{`${element.nomSalle.toUpperCase()}`}</span>
</span>
</td>
    </>
  )  
}

else if(parseInt(taille[1].debutCours)===15){
 
    switch(parseInt(taille[0].debutCours.substring(0, 2))){
        case 8:
           
                 switch(parseInt(taille[0].finCours.substring(0, 2))){
                     case 9:
                           return (
                             <>
   
                           
                             <td style={{border:"none"}}></td>
                             <td style={{border:"none"}}></td>
                             <td style={{border:"none"}}></td>
                             <td style={{border:"none"}}></td>
                             <td style={{border:"none"}}></td>
                             <td style={{border:"none"}}></td>
                             <td  style={{ position: 'relative' }} colSpan={colSpanTd(15,fins)}>
<span
style={{
fontSize: '11px',
fontWeight: '600',
color: '#000000',
position: 'absolute',
top: '24%',
left: '40%',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
}}
>
<span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
<span>{`${element.nomSalle.toUpperCase()}`}</span>
</span>
</td>
                           </>
                           )
                           case 10:
                             return (
                               <>
                                <td style={{border:"none"}}></td>
                               <td style={{border:"none"}}></td>
                               <td style={{border:"none"}}></td>
                               <td style={{border:"none"}}></td>
                               <td style={{border:"none"}}></td>
                               <td  style={{ position: 'relative' }} colSpan={colSpanTd(15,fins)}>
<span
style={{
fontSize: '11px',
fontWeight: '600',
color: '#000000',
position: 'absolute',
top: '24%',
left: '40%',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
}}
>
<span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
<span>{`${element.nomSalle.toUpperCase()}`}</span>
</span>
</td>
                             </>
                             )
                             case 11:
                               return (
                                 <>
                                  <td style={{border:"none"}}></td>
                                 <td style={{border:"none"}}></td>
                                 <td style={{border:"none"}}></td>
                                 <td style={{border:"none"}}></td>
                                 <td  style={{ position: 'relative' }} colSpan={colSpanTd(15,fins)}>
<span
style={{
fontSize: '11px',
fontWeight: '600',
color: '#000000',
position: 'absolute',
top: '24%',
left: '40%',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
}}
>
<span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
<span>{`${element.nomSalle.toUpperCase()}`}</span>
</span>
</td>
                               </>
                               )
                               case 12:
                               return (
                                 <>
                                  <td style={{border:"none"}}></td>
                                 <td style={{border:"none"}}></td>
                                 <td style={{border:"none"}}></td>
                                 <td  style={{ position: 'relative' }} colSpan={colSpanTd(15,fins)}>
<span
style={{
fontSize: '11px',
fontWeight: '600',
color: '#000000',
position: 'absolute',
top: '24%',
left: '40%',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
}}
>
<span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
<span>{`${element.nomSalle.toUpperCase()}`}</span>
</span>
</td>
                               </>
                               )
                               case 13:
                                 return (
                                   <>
                                    <td style={{border:"none"}}></td>
                                   <td style={{border:"none"}}></td>
                                   <td  style={{ position: 'relative' }} colSpan={colSpanTd(15,fins)}>
<span
style={{
fontSize: '11px',
fontWeight: '600',
color: '#000000',
position: 'absolute',
top: '24%',
left: '40%',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
}}
>
<span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
<span>{`${element.nomSalle.toUpperCase()}`}</span>
</span>
</td>
                                 </>
                                 )
                                 case 14:
                                   return (
                                     <>
                                      <td style={{border:"none"}}></td>
                                      <td  style={{ position: 'relative' }} colSpan={colSpanTd(15,fins)}>
<span
style={{
fontSize: '11px',
fontWeight: '600',
color: '#000000',
position: 'absolute',
top: '24%',
left: '40%',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
}}
>
<span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
<span>{`${element.nomSalle.toUpperCase()}`}</span>
</span>
</td>
                                   </>
                                   )
                                   case 15:
                                   return (
                                     <>

<td  style={{ position: 'relative' }} colSpan={colSpanTd(15,fins)}>
<span
style={{
fontSize: '11px',
fontWeight: '600',
color: '#000000',
position: 'absolute',
top: '24%',
left: '40%',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
}}
>
<span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
<span>{`${element.nomSalle.toUpperCase()}`}</span>
</span>
</td>
                                   </>
                                   )
                     default:
                         return null
                 } 
   
     case 9:
              switch(parseInt(taille[0].finCours.substring(0, 2))){
                  case 10:
                        return (
                          <>
                          <td style={{border:"none"}}></td>
                          <td style={{border:"none"}}></td>
                          <td style={{border:"none"}}></td>
                          <td style={{border:"none"}}></td>
                          <td style={{border:"none"}}></td>
                          <td  style={{ position: 'relative' }} colSpan={colSpanTd(15,fins)}>
<span
style={{
fontSize: '11px',
fontWeight: '600',
color: '#000000',
position: 'absolute',
top: '24%',
left: '40%',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
}}
>
<span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
<span>{`${element.nomSalle.toUpperCase()}`}</span>
</span>
</td>
                        </>
                        )
                        case 11:
                          return (
                            <>
                            <td style={{border:"none"}}></td>
                            <td style={{border:"none"}}></td>
                            <td style={{border:"none"}}></td>
                            <td style={{border:"none"}}></td>
                            <td  style={{ position: 'relative' }} colSpan={colSpanTd(15,fins)}>
<span
style={{
fontSize: '11px',
fontWeight: '600',
color: '#000000',
position: 'absolute',
top: '24%',
left: '40%',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
}}
>
<span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
<span>{`${element.nomSalle.toUpperCase()}`}</span>
</span>
</td>
                          </>
                          )
                          case 12:
                            return (
                              <>
                              <td style={{border:"none"}}></td>
                              <td style={{border:"none"}}></td>
                              <td style={{border:"none"}}></td>
                             
                              <td  style={{ position: 'relative' }} colSpan={colSpanTd(15,fins)}>
<span
style={{
fontSize: '11px',
fontWeight: '600',
color: '#000000',
position: 'absolute',
top: '24%',
left: '40%',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
}}
>
<span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
<span>{`${element.nomSalle.toUpperCase()}`}</span>
</span>
</td>
                            </>
                            )
                            case 13:
                            return (
                              <>
                              <td style={{border:"none"}}></td>
                             <td style={{border:"none"}}></td>
                             <td  style={{ position: 'relative' }} colSpan={colSpanTd(15,fins)}>
<span
style={{
fontSize: '11px',
fontWeight: '600',
color: '#000000',
position: 'absolute',
top: '24%',
left: '40%',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
}}
>
<span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
<span>{`${element.nomSalle.toUpperCase()}`}</span>
</span>
</td>
                            </>
                            )
                            case 14:
                              return (
                                <>
                              <td style={{border:"none"}}></td>
                              <td  style={{ position: 'relative' }} colSpan={colSpanTd(15,fins)}>
<span
style={{
fontSize: '11px',
fontWeight: '600',
color: '#000000',
position: 'absolute',
top: '24%',
left: '40%',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
}}
>
<span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
<span>{`${element.nomSalle.toUpperCase()}`}</span>
</span>
</td>
                              </>
                              )
                              case 15:
                                return (
                                  <>
                               <td  style={{ position: 'relative' }} colSpan={colSpanTd(15,fins)}>
<span
style={{
fontSize: '11px',
fontWeight: '600',
color: '#000000',
position: 'absolute',
top: '24%',
left: '40%',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
}}
>
<span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
<span>{`${element.nomSalle.toUpperCase()}`}</span>
</span>
</td>
                                </>
                                )
                              
                  default:
                      return null
              } 

   case 10:
            switch(parseInt(taille[0].finCours.substring(0, 2))){
                case 11:
                      return (
                        <>
                       
                        <td style={{border:"none"}}></td>
                        <td style={{border:"none"}}></td>
                        <td style={{border:"none"}}></td>
                        <td style={{border:"none"}}></td>
                        <td  style={{ position: 'relative' }} colSpan={colSpanTd(15,fins)}>
<span
style={{
fontSize: '11px',
fontWeight: '600',
color: '#000000',
position: 'absolute',
top: '24%',
left: '40%',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
}}
>
<span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
<span>{`${element.nomSalle.toUpperCase()}`}</span>
</span>
</td>
                      </>
                      )
                      case 12:
                        return (
                          <>
                            <td style={{border:"none"}}></td>
                          <td style={{border:"none"}}></td>
                          <td style={{border:"none"}}></td>
                         
                          <td  style={{ position: 'relative' }} colSpan={colSpanTd(15,fins)}>
<span
style={{
fontSize: '11px',
fontWeight: '600',
color: '#000000',
position: 'absolute',
top: '24%',
left: '40%',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
}}
>
<span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
<span>{`${element.nomSalle.toUpperCase()}`}</span>
</span>
</td>
                        </>
                        )
                        case 13:
                          return (
                            <>
                             <td style={{border:"none"}}></td>
                            <td style={{border:"none"}}></td>
                            <td  style={{ position: 'relative' }} colSpan={colSpanTd(15,fins)}>
<span
style={{
fontSize: '11px',
fontWeight: '600',
color: '#000000',
position: 'absolute',
top: '24%',
left: '40%',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
}}
>
<span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
<span>{`${element.nomSalle.toUpperCase()}`}</span>
</span>
</td>
                          </>
                          )
                          case 14:
                          return (
                            <>
                            <td style={{border:"none"}}></td>
                            <td  style={{ position: 'relative' }} colSpan={colSpanTd(15,fins)}>
<span
style={{
fontSize: '11px',
fontWeight: '600',
color: '#000000',
position: 'absolute',
top: '24%',
left: '40%',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
}}
>
<span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
<span>{`${element.nomSalle.toUpperCase()}`}</span>
</span>
</td>
                          </>
                          )
                          case 15:
                            return (
                              <>
                              
                              <td  style={{ position: 'relative' }} colSpan={colSpanTd(15,fins)}>
<span
style={{
fontSize: '11px',
fontWeight: '600',
color: '#000000',
position: 'absolute',
top: '24%',
left: '40%',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
}}
>
<span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
<span>{`${element.nomSalle.toUpperCase()}`}</span>
</span>
</td>
                            </>
                            )
                          
                            
                default:
                    return null
            } 
 case 11:
          switch(parseInt(taille[0].finCours.substring(0, 2))){
              case 12:
                    return (
                      <>
                     
                     
                      <td style={{border:"none"}}></td>
                      <td style={{border:"none"}}></td>
                      <td style={{border:"none"}}></td>
                      
                      <td  style={{ position: 'relative' }} colSpan={colSpanTd(15,fins)}>
<span
style={{
fontSize: '11px',
fontWeight: '600',
color: '#000000',
position: 'absolute',
top: '24%',
left: '40%',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
}}
>
<span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
<span>{`${element.nomSalle.toUpperCase()}`}</span>
</span>
</td>
                    </>
                    )
                    case 13:
                      return (
                        <>
                        
                        <td style={{border:"none"}}></td>
                        <td style={{border:"none"}}></td>
                       
                        <td  style={{ position: 'relative' }} colSpan={colSpanTd(15,fins)}>
<span
style={{
fontSize: '11px',
fontWeight: '600',
color: '#000000',
position: 'absolute',
top: '24%',
left: '40%',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
}}
>
<span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
<span>{`${element.nomSalle.toUpperCase()}`}</span>
</span>
</td>
                      </>
                      )
                      case 14:
                        return (
                          <>
                         
                          
                         <td style={{border:"none"}}></td>
                         <td  style={{ position: 'relative' }} colSpan={colSpanTd(15,fins)}>
<span
style={{
fontSize: '11px',
fontWeight: '600',
color: '#000000',
position: 'absolute',
top: '24%',
left: '40%',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
}}
>
<span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
<span>{`${element.nomSalle.toUpperCase()}`}</span>
</span>
</td>
                        </>
                        )
                        case 15:
                        return (
                          <>
                         
                          
                         <td  style={{ position: 'relative' }} colSpan={colSpanTd(15,fins)}>
<span
style={{
fontSize: '11px',
fontWeight: '600',
color: '#000000',
position: 'absolute',
top: '24%',
left: '40%',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
}}
>
<span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
<span>{`${element.nomSalle.toUpperCase()}`}</span>
</span>
</td>
                        </>
                        )
                       
                        
                          
              default:
                  return null
          } 
   
      case 12:
          switch(parseInt(taille[0].finCours.substring(0, 2))){
              case 13:
                    return (
                      <>
                     
                     
                     <td style={{border:"none"}}></td>
                      <td style={{border:"none"}}></td>
                      <td  style={{ position: 'relative' }} colSpan={colSpanTd(15,fins)}>
<span
style={{
fontSize: '11px',
fontWeight: '600',
color: '#000000',
position: 'absolute',
top: '24%',
left: '40%',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
}}
>
<span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
<span>{`${element.nomSalle.toUpperCase()}`}</span>
</span>
</td>
                    </>
                    )
                    case 14:
                      return (
                        <>
                        
                        <td style={{border:"none"}}></td>
                      
                        <td  style={{ position: 'relative' }} colSpan={colSpanTd(15,fins)}>
<span
style={{
fontSize: '11px',
fontWeight: '600',
color: '#000000',
position: 'absolute',
top: '24%',
left: '40%',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
}}
>
<span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
<span>{`${element.nomSalle.toUpperCase()}`}</span>
</span>
</td>
                      </>
                      )
                      case 15:
                      return (
                        <>
                        
                        <td  style={{ position: 'relative' }} colSpan={colSpanTd(15,fins)}>
<span
style={{
fontSize: '11px',
fontWeight: '600',
color: '#000000',
position: 'absolute',
top: '24%',
left: '40%',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
}}
>
<span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
<span>{`${element.nomSalle.toUpperCase()}`}</span>
</span>
</td>
                      </>
                      )
                      
                         
                        
                          
              default:
                  return null
          } 
          case 13:
           switch(parseInt(taille[0].finCours.substring(0, 2))){
              case 14:
                    return (
                      <>
                     
                     
                     <td style={{border:"none"}}></td>
                     <td  style={{ position: 'relative' }} colSpan={colSpanTd(15,fins)}>
<span
style={{
fontSize: '11px',
fontWeight: '600',
color: '#000000',
position: 'absolute',
top: '24%',
left: '40%',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
}}
>
<span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
<span>{`${element.nomSalle.toUpperCase()}`}</span>
</span>
</td>
                    </>
                    )
                    case 15:
                      return (
                        <>
                       
                       
                       <td  style={{ position: 'relative' }} colSpan={colSpanTd(15,fins)}>
<span
style={{
fontSize: '11px',
fontWeight: '600',
color: '#000000',
position: 'absolute',
top: '24%',
left: '40%',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
}}
>
<span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
<span>{`${element.nomSalle.toUpperCase()}`}</span>
</span>
</td>
                      </>
                      )
                        
                    
                          
              default:
                  return null
          } 
   
          case 14:
            switch(parseInt(taille[0].finCours.substring(0, 2))){
               case 15:
                     return (
                       <>
                      
                      
                      <td  style={{ position: 'relative' }} colSpan={colSpanTd(15,fins)}>
<span
style={{
fontSize: '11px',
fontWeight: '600',
color: '#000000',
position: 'absolute',
top: '24%',
left: '40%',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
}}
>
<span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
<span>{`${element.nomSalle.toUpperCase()}`}</span>
</span>
</td>
                     </>
                     )
                    
                          
                           
               default:
                   return null
           } 
    
     

default:
        return null
 }
 
} else if(parseInt(taille[2].debutCours)===15){
 
    switch(parseInt(taille[1].debutCours.substring(0, 2))){
        case 8:
           
                 switch(parseInt(taille[1].finCours.substring(0, 2))){
                     case 9:
                           return (
                             <>
   
                           
                             <td style={{border:"none"}}></td>
                             <td style={{border:"none"}}></td>
                             <td style={{border:"none"}}></td>
                             <td style={{border:"none"}}></td>
                             <td style={{border:"none"}}></td>
                             <td style={{border:"none"}}></td>
                             <td  style={{ position: 'relative' }} colSpan={colSpanTd(15,fins)}>
<span
style={{
fontSize: '11px',
fontWeight: '600',
color: '#000000',
position: 'absolute',
top: '24%',
left: '40%',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
}}
>
<span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
<span>{`${element.nomSalle.toUpperCase()}`}</span>
</span>
</td>
                           </>
                           )
                           case 10:
                             return (
                               <>
                                <td style={{border:"none"}}></td>
                               <td style={{border:"none"}}></td>
                               <td style={{border:"none"}}></td>
                               <td style={{border:"none"}}></td>
                               <td style={{border:"none"}}></td>
                               <td  style={{ position: 'relative' }} colSpan={colSpanTd(15,fins)}>
<span
style={{
fontSize: '11px',
fontWeight: '600',
color: '#000000',
position: 'absolute',
top: '24%',
left: '40%',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
}}
>
<span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
<span>{`${element.nomSalle.toUpperCase()}`}</span>
</span>
</td>
                             </>
                             )
                             case 11:
                               return (
                                 <>
                                  <td style={{border:"none"}}></td>
                                 <td style={{border:"none"}}></td>
                                 <td style={{border:"none"}}></td>
                                 <td style={{border:"none"}}></td>
                                 <td  style={{ position: 'relative' }} colSpan={colSpanTd(15,fins)}>
<span
style={{
fontSize: '11px',
fontWeight: '600',
color: '#000000',
position: 'absolute',
top: '24%',
left: '40%',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
}}
>
<span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
<span>{`${element.nomSalle.toUpperCase()}`}</span>
</span>
</td>
                               </>
                               )
                               case 12:
                               return (
                                 <>
                                  <td style={{border:"none"}}></td>
                                 <td style={{border:"none"}}></td>
                                 <td style={{border:"none"}}></td>
                                 <td  style={{ position: 'relative' }} colSpan={colSpanTd(15,fins)}>
<span
style={{
fontSize: '11px',
fontWeight: '600',
color: '#000000',
position: 'absolute',
top: '24%',
left: '40%',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
}}
>
<span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
<span>{`${element.nomSalle.toUpperCase()}`}</span>
</span>
</td>
                               </>
                               )
                               case 13:
                                 return (
                                   <>
                                    <td style={{border:"none"}}></td>
                                   <td style={{border:"none"}}></td>
                                   <td  style={{ position: 'relative' }} colSpan={colSpanTd(15,fins)}>
<span
style={{
fontSize: '11px',
fontWeight: '600',
color: '#000000',
position: 'absolute',
top: '24%',
left: '40%',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
}}
>
<span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
<span>{`${element.nomSalle.toUpperCase()}`}</span>
</span>
</td>
                                 </>
                                 )
                                 case 14:
                                   return (
                                     <>
                                      <td style={{border:"none"}}></td>
                                      <td  style={{ position: 'relative' }} colSpan={colSpanTd(15,fins)}>
<span
style={{
fontSize: '11px',
fontWeight: '600',
color: '#000000',
position: 'absolute',
top: '24%',
left: '40%',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
}}
>
<span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
<span>{`${element.nomSalle.toUpperCase()}`}</span>
</span>
</td>
                                   </>
                                   )
                                   case 15:
                                   return (
                                     <>

<td  style={{ position: 'relative' }} colSpan={colSpanTd(15,fins)}>
<span
style={{
fontSize: '11px',
fontWeight: '600',
color: '#000000',
position: 'absolute',
top: '24%',
left: '40%',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
}}
>
<span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
<span>{`${element.nomSalle.toUpperCase()}`}</span>
</span>
</td>
                                   </>
                                   )
                     default:
                         return null
                 } 
   
     case 9:
              switch(parseInt(taille[1].finCours.substring(0, 2))){
                  case 10:
                        return (
                          <>
                          <td style={{border:"none"}}></td>
                          <td style={{border:"none"}}></td>
                          <td style={{border:"none"}}></td>
                          <td style={{border:"none"}}></td>
                          <td style={{border:"none"}}></td>
                          <td  style={{ position: 'relative' }} colSpan={colSpanTd(15,fins)}>
<span
style={{
fontSize: '11px',
fontWeight: '600',
color: '#000000',
position: 'absolute',
top: '24%',
left: '40%',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
}}
>
<span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
<span>{`${element.nomSalle.toUpperCase()}`}</span>
</span>
</td>
                        </>
                        )
                        case 11:
                          return (
                            <>
                            <td style={{border:"none"}}></td>
                            <td style={{border:"none"}}></td>
                            <td style={{border:"none"}}></td>
                            <td style={{border:"none"}}></td>
                            <td  style={{ position: 'relative' }} colSpan={colSpanTd(15,fins)}>
<span
style={{
fontSize: '11px',
fontWeight: '600',
color: '#000000',
position: 'absolute',
top: '24%',
left: '40%',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
}}
>
<span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
<span>{`${element.nomSalle.toUpperCase()}`}</span>
</span>
</td>
                          </>
                          )
                          case 12:
                            return (
                              <>
                              <td style={{border:"none"}}></td>
                              <td style={{border:"none"}}></td>
                              <td style={{border:"none"}}></td>
                             
                              <td  style={{ position: 'relative' }} colSpan={colSpanTd(15,fins)}>
<span
style={{
fontSize: '11px',
fontWeight: '600',
color: '#000000',
position: 'absolute',
top: '24%',
left: '40%',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
}}
>
<span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
<span>{`${element.nomSalle.toUpperCase()}`}</span>
</span>
</td>
                            </>
                            )
                            case 13:
                            return (
                              <>
                              <td style={{border:"none"}}></td>
                             <td style={{border:"none"}}></td>
                             <td  style={{ position: 'relative' }} colSpan={colSpanTd(15,fins)}>
<span
style={{
fontSize: '11px',
fontWeight: '600',
color: '#000000',
position: 'absolute',
top: '24%',
left: '40%',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
}}
>
<span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
<span>{`${element.nomSalle.toUpperCase()}`}</span>
</span>
</td>
                            </>
                            )
                            case 14:
                              return (
                                <>
                              <td style={{border:"none"}}></td>
                              <td  style={{ position: 'relative' }} colSpan={colSpanTd(15,fins)}>
<span
style={{
fontSize: '11px',
fontWeight: '600',
color: '#000000',
position: 'absolute',
top: '24%',
left: '40%',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
}}
>
<span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
<span>{`${element.nomSalle.toUpperCase()}`}</span>
</span>
</td>
                              </>
                              )
                              case 15:
                                return (
                                  <>
                               <td  style={{ position: 'relative' }} colSpan={colSpanTd(15,fins)}>
<span
style={{
fontSize: '11px',
fontWeight: '600',
color: '#000000',
position: 'absolute',
top: '24%',
left: '40%',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
}}
>
<span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
<span>{`${element.nomSalle.toUpperCase()}`}</span>
</span>
</td>
                                </>
                                )
                              
                  default:
                      return null
              } 

   case 10:
            switch(parseInt(taille[1].finCours.substring(0, 2))){
                case 11:
                      return (
                        <>
                       
                        <td style={{border:"none"}}></td>
                        <td style={{border:"none"}}></td>
                        <td style={{border:"none"}}></td>
                        <td style={{border:"none"}}></td>
                        <td  style={{ position: 'relative' }} colSpan={colSpanTd(15,fins)}>
<span
style={{
fontSize: '11px',
fontWeight: '600',
color: '#000000',
position: 'absolute',
top: '24%',
left: '40%',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
}}
>
<span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
<span>{`${element.nomSalle.toUpperCase()}`}</span>
</span>
</td>
                      </>
                      )
                      case 12:
                        return (
                          <>
                            <td style={{border:"none"}}></td>
                          <td style={{border:"none"}}></td>
                          <td style={{border:"none"}}></td>
                         
                          <td  style={{ position: 'relative' }} colSpan={colSpanTd(15,fins)}>
<span
style={{
fontSize: '11px',
fontWeight: '600',
color: '#000000',
position: 'absolute',
top: '24%',
left: '40%',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
}}
>
<span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
<span>{`${element.nomSalle.toUpperCase()}`}</span>
</span>
</td>
                        </>
                        )
                        case 13:
                          return (
                            <>
                             <td style={{border:"none"}}></td>
                            <td style={{border:"none"}}></td>
                            <td  style={{ position: 'relative' }} colSpan={colSpanTd(15,fins)}>
<span
style={{
fontSize: '11px',
fontWeight: '600',
color: '#000000',
position: 'absolute',
top: '24%',
left: '40%',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
}}
>
<span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
<span>{`${element.nomSalle.toUpperCase()}`}</span>
</span>
</td>
                          </>
                          )
                          case 14:
                          return (
                            <>
                            <td style={{border:"none"}}></td>
                            <td  style={{ position: 'relative' }} colSpan={colSpanTd(15,fins)}>
<span
style={{
fontSize: '11px',
fontWeight: '600',
color: '#000000',
position: 'absolute',
top: '24%',
left: '40%',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
}}
>
<span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
<span>{`${element.nomSalle.toUpperCase()}`}</span>
</span>
</td>
                          </>
                          )
                          case 15:
                            return (
                              <>
                              
                              <td  style={{ position: 'relative' }} colSpan={colSpanTd(15,fins)}>
<span
style={{
fontSize: '11px',
fontWeight: '600',
color: '#000000',
position: 'absolute',
top: '24%',
left: '40%',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
}}
>
<span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
<span>{`${element.nomSalle.toUpperCase()}`}</span>
</span>
</td>
                            </>
                            )
                          
                            
                default:
                    return null
            } 
 case 11:
          switch(parseInt(taille[1].finCours.substring(0, 2))){
              case 12:
                    return (
                      <>
                     
                     
                      <td style={{border:"none"}}></td>
                      <td style={{border:"none"}}></td>
                      <td style={{border:"none"}}></td>
                      
                      <td  style={{ position: 'relative' }} colSpan={colSpanTd(15,fins)}>
<span
style={{
fontSize: '11px',
fontWeight: '600',
color: '#000000',
position: 'absolute',
top: '24%',
left: '40%',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
}}
>
<span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
<span>{`${element.nomSalle.toUpperCase()}`}</span>
</span>
</td>
                    </>
                    )
                    case 13:
                      return (
                        <>
                        
                        <td style={{border:"none"}}></td>
                        <td style={{border:"none"}}></td>
                       
                        <td  style={{ position: 'relative' }} colSpan={colSpanTd(15,fins)}>
<span
style={{
fontSize: '11px',
fontWeight: '600',
color: '#000000',
position: 'absolute',
top: '24%',
left: '40%',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
}}
>
<span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
<span>{`${element.nomSalle.toUpperCase()}`}</span>
</span>
</td>
                      </>
                      )
                      case 14:
                        return (
                          <>
                         
                          
                         <td style={{border:"none"}}></td>
                         <td  style={{ position: 'relative' }} colSpan={colSpanTd(15,fins)}>
<span
style={{
fontSize: '11px',
fontWeight: '600',
color: '#000000',
position: 'absolute',
top: '24%',
left: '40%',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
}}
>
<span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
<span>{`${element.nomSalle.toUpperCase()}`}</span>
</span>
</td>
                        </>
                        )
                        case 15:
                        return (
                          <>
                         
                          
                         <td  style={{ position: 'relative' }} colSpan={colSpanTd(15,fins)}>
<span
style={{
fontSize: '11px',
fontWeight: '600',
color: '#000000',
position: 'absolute',
top: '24%',
left: '40%',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
}}
>
<span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
<span>{`${element.nomSalle.toUpperCase()}`}</span>
</span>
</td>
                        </>
                        )
                       
                        
                          
              default:
                  return null
          } 
   
      case 12:
          switch(parseInt(taille[1].finCours.substring(0, 2))){
              case 13:
                    return (
                      <>
                     
                     
                     <td style={{border:"none"}}></td>
                      <td style={{border:"none"}}></td>
                      <td  style={{ position: 'relative' }} colSpan={colSpanTd(15,fins)}>
<span
style={{
fontSize: '11px',
fontWeight: '600',
color: '#000000',
position: 'absolute',
top: '24%',
left: '40%',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
}}
>
<span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
<span>{`${element.nomSalle.toUpperCase()}`}</span>
</span>
</td>
                    </>
                    )
                    case 14:
                      return (
                        <>
                        
                        <td style={{border:"none"}}></td>
                      
                        <td  style={{ position: 'relative' }} colSpan={colSpanTd(15,fins)}>
<span
style={{
fontSize: '11px',
fontWeight: '600',
color: '#000000',
position: 'absolute',
top: '24%',
left: '40%',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
}}
>
<span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
<span>{`${element.nomSalle.toUpperCase()}`}</span>
</span>
</td>
                      </>
                      )
                      case 15:
                      return (
                        <>
                        
                        <td  style={{ position: 'relative' }} colSpan={colSpanTd(15,fins)}>
<span
style={{
fontSize: '11px',
fontWeight: '600',
color: '#000000',
position: 'absolute',
top: '24%',
left: '40%',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
}}
>
<span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
<span>{`${element.nomSalle.toUpperCase()}`}</span>
</span>
</td>
                      </>
                      )
                      
                         
                        
                          
              default:
                  return null
          } 
          case 13:
           switch(parseInt(taille[1].finCours.substring(0, 2))){
              case 14:
                    return (
                      <>
                     
                     
                     <td style={{border:"none"}}></td>
                     <td  style={{ position: 'relative' }} colSpan={colSpanTd(15,fins)}>
<span
style={{
fontSize: '11px',
fontWeight: '600',
color: '#000000',
position: 'absolute',
top: '24%',
left: '40%',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
}}
>
<span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
<span>{`${element.nomSalle.toUpperCase()}`}</span>
</span>
</td>
                    </>
                    )
                    case 15:
                      return (
                        <>
                       
                       
                       <td  style={{ position: 'relative' }} colSpan={colSpanTd(15,fins)}>
<span
style={{
fontSize: '11px',
fontWeight: '600',
color: '#000000',
position: 'absolute',
top: '24%',
left: '40%',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
}}
>
<span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
<span>{`${element.nomSalle.toUpperCase()}`}</span>
</span>
</td>
                      </>
                      )
                        
                    
                          
              default:
                  return null
          } 
   
          case 14:
            switch(parseInt(taille[1].finCours.substring(0, 2))){
               case 15:
                     return (
                       <>
                      
                      
                      <td  style={{ position: 'relative' }} colSpan={colSpanTd(15,fins)}>
<span
style={{
fontSize: '11px',
fontWeight: '600',
color: '#000000',
position: 'absolute',
top: '24%',
left: '40%',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
}}
>
<span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
<span>{`${element.nomSalle.toUpperCase()}`}</span>
</span>
</td>
                     </>
                     )
                    
                          
                           
               default:
                   return null
           } 
    
     

default:
        return null
 }
}

case 16:
       
              if(parseInt(taille[0].debutCours)===16){
                return (
                  <>
                   <td style={{border:"none"}}></td>
                   <td style={{border:"none"}}></td>
                   <td style={{border:"none"}}></td>
                   <td style={{border:"none"}}></td>
                  <td style={{border:"none"}}></td>
                  <td style={{border:"none"}}></td>
                  <td style={{border:"none"}}></td>
                  <td style={{border:"none"}}></td>
                  <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                  </>
                )  
              }
              else if(parseInt(taille[1].debutCours)===16){
               
                  switch(parseInt(taille[0].debutCours.substring(0, 2))){
                      case 8:
                         
                               switch(parseInt(taille[0].finCours.substring(0, 2))){
                                   case 9:
                                         return (
                                           <>
                 
                                         
                                           <td style={{border:"none"}}></td>
                                           <td style={{border:"none"}}></td>
                                           <td style={{border:"none"}}></td>
                                           <td style={{border:"none"}}></td>
                                           <td style={{border:"none"}}></td>
                                           <td style={{border:"none"}}></td>
                                           <td style={{border:"none"}}></td>
                                           <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                         </>
                                         )
                                         case 10:
                                           return (
                                             <>
                                             <td style={{border:"none"}}></td>
                                              <td style={{border:"none"}}></td>
                                             <td style={{border:"none"}}></td>
                                             <td style={{border:"none"}}></td>
                                             <td style={{border:"none"}}></td>
                                             <td style={{border:"none"}}></td>
                                             <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                           </>
                                           )
                                           case 11:
                                             return (
                                               <>
                                               <td style={{border:"none"}}></td>
                                                <td style={{border:"none"}}></td>
                                               <td style={{border:"none"}}></td>
                                               <td style={{border:"none"}}></td>
                                               <td style={{border:"none"}}></td>
                                               <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                             </>
                                             )
                                             case 12:
                                             return (
                                               <>
                                               <td style={{border:"none"}}></td>
                                                <td style={{border:"none"}}></td>
                                               <td style={{border:"none"}}></td>
                                               <td style={{border:"none"}}></td>
                                               <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                             </>
                                             )
                                             case 13:
                                               return (
                                                 <>
                                                 <td style={{border:"none"}}></td>
                                                  <td style={{border:"none"}}></td>
                                                 <td style={{border:"none"}}></td>
                                                 <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                               </>
                                               )
                                               case 14:
                                                 return (
                                                   <>
                                                   <td style={{border:"none"}}></td>
                                                    <td style={{border:"none"}}></td>
                                                    <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                                 </>
                                                 )
                                                 case 15:
                                                 return (
                                                   <>
                                                     <td style={{border:"none"}}></td>
                                                     <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                                 </>
                                                 )
                                                 case 16:
                                                  return (
                                                    <>
                                                 <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                                  </>
                                                  )
                                   default:
                                       return null
                               } 
                 
                   case 9:
                            switch(parseInt(taille[0].finCours.substring(0, 2))){
                                case 10:
                                      return (
                                        <>
                                        <td style={{border:"none"}}></td>
                                        <td style={{border:"none"}}></td>
                                        <td style={{border:"none"}}></td>
                                        <td style={{border:"none"}}></td>
                                        <td style={{border:"none"}}></td>
                                        <td style={{border:"none"}}></td>
                                        <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                      </>
                                      )
                                      case 11:
                                        return (
                                          <>
                                          <td style={{border:"none"}}></td>
                                          <td style={{border:"none"}}></td>
                                          <td style={{border:"none"}}></td>
                                          <td style={{border:"none"}}></td>
                                          <td style={{border:"none"}}></td>
                                         
                                          <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                        </>
                                        )
                                        case 12:
                                          return (
                                            <>
                                            <td style={{border:"none"}}></td>
                                            <td style={{border:"none"}}></td>
                                            <td style={{border:"none"}}></td>
                                            <td style={{border:"none"}}></td>
                                            <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                          </>
                                          )
                                          case 13:
                                          return (
                                            <>
                                            <td style={{border:"none"}}></td>
                                            <td style={{border:"none"}}></td>
                                           <td style={{border:"none"}}></td>
                                           <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                          </>
                                          )
                                          case 14:
                                            return (
                                              <>
                                              <td style={{border:"none"}}></td>
                                            <td style={{border:"none"}}></td>
                                            <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                            </>
                                            )
                                            case 15:
                                              return (
                                                <>
                                             <td style={{border:"none"}}></td>
                                             <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                              </>
                                              
                                              )
                                              case 16:
                                                return (
                                                  <>
                                             
                                             <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                                </>
                                                )
                                            
                                default:
                                    return null
                            } 
              
                 case 10:
                          switch(parseInt(taille[0].finCours.substring(0, 2))){
                              case 11:
                                    return (
                                      <>
                                     
                                      <td style={{border:"none"}}></td>
                                      <td style={{border:"none"}}></td>
                                      <td style={{border:"none"}}></td>
                                      <td style={{border:"none"}}></td>
                                      <td style={{border:"none"}}></td>
                                      <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                    </>
                                    )
                                    case 12:
                                      return (
                                        <>
                                          <td style={{border:"none"}}></td>
                                        <td style={{border:"none"}}></td>
                                        <td style={{border:"none"}}></td>
                                        <td style={{border:"none"}}></td>
                                        <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                      </>
                                      )
                                      case 13:
                                        return (
                                          <>
                                           <td style={{border:"none"}}></td>
                                          <td style={{border:"none"}}></td>
                                          <td style={{border:"none"}}></td>
                                          <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                        </>
                                        )
                                        case 14:
                                        return (
                                          <>
                                          <td style={{border:"none"}}></td>
                                          <td style={{border:"none"}}></td>
                                          <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                        </>
                                        )
                                        case 15:
                                          return (
                                            <>
                                            <td style={{border:"none"}}></td>
                                            <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                          </>
                                          )
                                          case 16:
                                            return (
                                              <>
                                             
                                             <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                            </>
                                            )
                                        
                                          
                              default:
                                  return null
                          } 
               case 11:
                        switch(parseInt(taille[0].finCours.substring(0, 2))){
                            case 12:
                                  return (
                                    <>
                                   
                                   
                                    <td style={{border:"none"}}></td>
                                    <td style={{border:"none"}}></td>
                                    <td style={{border:"none"}}></td>
                                    <td style={{border:"none"}}></td>
                                    
                                    <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                  </>
                                  )
                                  case 13:
                                    return (
                                      <>
                                      
                                      <td style={{border:"none"}}></td>
                                      <td style={{border:"none"}}></td>
                                      <td style={{border:"none"}}></td>
                                     
                                      <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                    </>
                                    )
                                    case 14:
                                      return (
                                        <>
                                       
                                       <td style={{border:"none"}}></td>
                                       <td style={{border:"none"}}></td>
                                       <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                      </>
                                      )
                                      case 15:
                                      return (
                                        <>
                                       
                                        
                                       <td style={{border:"none"}}></td>
                                       <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                      </>
                                      )
                                      case 16:
                                        return (
                                          <>
                                         
                                          
                                         <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                        </>
                                        )
                                     
                                      
                                        
                            default:
                                return null
                        } 
                 
                    case 12:
                        switch(parseInt(taille[0].finCours.substring(0, 2))){
                            case 13:
                                  return (
                                    <>
                                   
                                   
                                   <td style={{border:"none"}}></td>
                                   <td style={{border:"none"}}></td>
                                    <td style={{border:"none"}}></td>
                                    <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                  </>
                                  )
                                  case 14:
                                    return (
                                      <>
                                      
                                      <td style={{border:"none"}}></td>
                                      <td style={{border:"none"}}></td>
                                      <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                    </>
                                    )
                                    case 15:
                                    return (
                                      <>
                                      
                                      <td style={{border:"none"}}></td>
                                      <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                    </>
                                    )
                                    case 16:
                                      return (
                                        <>
                                        
                                        <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                      </>
                                      )
                                    
                                       
                                      
                                        
                            default:
                                return null
                        } 
                        case 13:
                         switch(parseInt(taille[0].finCours.substring(0, 2))){
                            case 14:
                                  return (
                                    <>
                                   
                                   
                                   <td style={{border:"none"}}></td>
                                   
                                   <td style={{border:"none"}}></td>
                                   <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                  </>
                                  )
                                  case 15:
                                    return (
                                      <>
                                     
                                     
                                     
                                   <td style={{border:"none"}}></td>
                                   <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                    </>
                                    )
                                    case 16:
                                      return (
                                        <>
                                       
                                       
                                       
                                       <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                      </>
                                      )
                                        
                                  
                                        
                            default:
                                return null
                        } 
                 
                        case 14:
                          switch(parseInt(taille[0].finCours.substring(0, 2))){
                             case 15:
                                   return (
                                     <>
                                    
                                    <td style={{border:"none"}}></td>
                                    
                                    <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                   </>
                                   )
                                   case 16:
                                    return (
                                      <>
                                     
                                    
                                     <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                    </>
                                    )
                                  
                                        
                                         
                             default:
                                 return null
                         } 
                         case 15:
                          switch(parseInt(taille[0].finCours.substring(0, 2))){
                             case 16:
                                   return (
                                     <>
                              
                                    
                              <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                   </>
                                   )
                                   
                                        
                                         
                             default:
                                 return null
                         } 
                  
                   
           
           default:
                      return null
               }
               
              }else if(parseInt(taille[2].debutCours)===16){
               
                switch(parseInt(taille[1].debutCours.substring(0, 2))){
                    case 8:
                       
                             switch(parseInt(taille[1].finCours.substring(0, 2))){
                                 case 9:
                                       return (
                                         <>
               
                                       
                                         <td style={{border:"none"}}></td>
                                         <td style={{border:"none"}}></td>
                                         <td style={{border:"none"}}></td>
                                         <td style={{border:"none"}}></td>
                                         <td style={{border:"none"}}></td>
                                         <td style={{border:"none"}}></td>
                                         <td style={{border:"none"}}></td>
                                         <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                       </>
                                       )
                                       case 10:
                                         return (
                                           <>
                                           <td style={{border:"none"}}></td>
                                            <td style={{border:"none"}}></td>
                                           <td style={{border:"none"}}></td>
                                           <td style={{border:"none"}}></td>
                                           <td style={{border:"none"}}></td>
                                           <td style={{border:"none"}}></td>
                                           <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                         </>
                                         )
                                         case 11:
                                           return (
                                             <>
                                             <td style={{border:"none"}}></td>
                                              <td style={{border:"none"}}></td>
                                             <td style={{border:"none"}}></td>
                                             <td style={{border:"none"}}></td>
                                             <td style={{border:"none"}}></td>
                                             <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                           </>
                                           )
                                           case 12:
                                           return (
                                             <>
                                             <td style={{border:"none"}}></td>
                                              <td style={{border:"none"}}></td>
                                             <td style={{border:"none"}}></td>
                                             <td style={{border:"none"}}></td>
                                             <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                           </>
                                           )
                                           case 13:
                                             return (
                                               <>
                                               <td style={{border:"none"}}></td>
                                                <td style={{border:"none"}}></td>
                                               <td style={{border:"none"}}></td>
                                               <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                             </>
                                             )
                                             case 14:
                                               return (
                                                 <>
                                                 <td style={{border:"none"}}></td>
                                                  <td style={{border:"none"}}></td>
                                                  <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                               </>
                                               )
                                               case 15:
                                               return (
                                                 <>
                                                   <td style={{border:"none"}}></td>
                                                   <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                               </>
                                               )
                                               case 16:
                                                return (
                                                  <>
                                               <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                                </>
                                                )
                                 default:
                                     return null
                             } 
               
                 case 9:
                          switch(parseInt(taille[1].finCours.substring(0, 2))){
                              case 10:
                                    return (
                                      <>
                                      <td style={{border:"none"}}></td>
                                      <td style={{border:"none"}}></td>
                                      <td style={{border:"none"}}></td>
                                      <td style={{border:"none"}}></td>
                                      <td style={{border:"none"}}></td>
                                      <td style={{border:"none"}}></td>
                                      <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                    </>
                                    )
                                    case 11:
                                      return (
                                        <>
                                        <td style={{border:"none"}}></td>
                                        <td style={{border:"none"}}></td>
                                        <td style={{border:"none"}}></td>
                                        <td style={{border:"none"}}></td>
                                        <td style={{border:"none"}}></td>
                                       
                                        <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                      </>
                                      )
                                      case 12:
                                        return (
                                          <>
                                          <td style={{border:"none"}}></td>
                                          <td style={{border:"none"}}></td>
                                          <td style={{border:"none"}}></td>
                                          <td style={{border:"none"}}></td>
                                          <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                        </>
                                        )
                                        case 13:
                                        return (
                                          <>
                                          <td style={{border:"none"}}></td>
                                          <td style={{border:"none"}}></td>
                                         <td style={{border:"none"}}></td>
                                         <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                        </>
                                        )
                                        case 14:
                                          return (
                                            <>
                                            <td style={{border:"none"}}></td>
                                          <td style={{border:"none"}}></td>
                                          <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                          </>
                                          )
                                          case 15:
                                            return (
                                              <>
                                           <td style={{border:"none"}}></td>
                                           <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                            </>
                                            
                                            )
                                            case 16:
                                              return (
                                                <>
                                           
                                           <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                              </>
                                              )
                                          
                              default:
                                  return null
                          } 
            
               case 10:
                        switch(parseInt(taille[1].finCours.substring(0, 2))){
                            case 11:
                                  return (
                                    <>
                                   
                                    <td style={{border:"none"}}></td>
                                    <td style={{border:"none"}}></td>
                                    <td style={{border:"none"}}></td>
                                    <td style={{border:"none"}}></td>
                                    <td style={{border:"none"}}></td>
                                    <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                  </>
                                  )
                                  case 12:
                                    return (
                                      <>
                                        <td style={{border:"none"}}></td>
                                      <td style={{border:"none"}}></td>
                                      <td style={{border:"none"}}></td>
                                      <td style={{border:"none"}}></td>
                                      <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                    </>
                                    )
                                    case 13:
                                      return (
                                        <>
                                         <td style={{border:"none"}}></td>
                                        <td style={{border:"none"}}></td>
                                        <td style={{border:"none"}}></td>
                                        <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                      </>
                                      )
                                      case 14:
                                      return (
                                        <>
                                        <td style={{border:"none"}}></td>
                                        <td style={{border:"none"}}></td>
                                        <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                      </>
                                      )
                                      case 15:
                                        return (
                                          <>
                                          <td style={{border:"none"}}></td>
                                          <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                        </>
                                        )
                                        case 16:
                                          return (
                                            <>
                                           
                                           <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                          </>
                                          )
                                      
                                        
                            default:
                                return null
                        } 
             case 11:
                      switch(parseInt(taille[1].finCours.substring(0, 2))){
                          case 12:
                                return (
                                  <>
                                 
                                 
                                  <td style={{border:"none"}}></td>
                                  <td style={{border:"none"}}></td>
                                  <td style={{border:"none"}}></td>
                                  <td style={{border:"none"}}></td>
                                  
                                  <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                </>
                                )
                                case 13:
                                  return (
                                    <>
                                    
                                    <td style={{border:"none"}}></td>
                                    <td style={{border:"none"}}></td>
                                    <td style={{border:"none"}}></td>
                                   
                                    <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                  </>
                                  )
                                  case 14:
                                    return (
                                      <>
                                     
                                     <td style={{border:"none"}}></td>
                                     <td style={{border:"none"}}></td>
                                     <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                    </>
                                    )
                                    case 15:
                                    return (
                                      <>
                                     
                                      
                                     <td style={{border:"none"}}></td>
                                     <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                    </>
                                    )
                                    case 16:
                                      return (
                                        <>
                                       
                                        
                                       <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                      </>
                                      )
                                   
                                    
                                      
                          default:
                              return null
                      } 
               
                  case 12:
                      switch(parseInt(taille[1].finCours.substring(0, 2))){
                          case 13:
                                return (
                                  <>
                                 
                                 
                                 <td style={{border:"none"}}></td>
                                 <td style={{border:"none"}}></td>
                                  <td style={{border:"none"}}></td>
                                  <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                </>
                                )
                                case 14:
                                  return (
                                    <>
                                    
                                    <td style={{border:"none"}}></td>
                                    <td style={{border:"none"}}></td>
                                    <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                  </>
                                  )
                                  case 15:
                                  return (
                                    <>
                                    
                                    <td style={{border:"none"}}></td>
                                    <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                  </>
                                  )
                                  case 16:
                                    return (
                                      <>
                                      
                                      <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                    </>
                                    )
                                  
                                     
                                    
                                      
                          default:
                              return null
                      } 
                      case 13:
                       switch(parseInt(taille[1].finCours.substring(0, 2))){
                          case 14:
                                return (
                                  <>
                                 
                                 
                                 <td style={{border:"none"}}></td>
                                 
                                 <td style={{border:"none"}}></td>
                                 <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                </>
                                )
                                case 15:
                                  return (
                                    <>
                                   
                                   
                                   
                                 <td style={{border:"none"}}></td>
                                 <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                  </>
                                  )
                                  case 16:
                                    return (
                                      <>
                                     
                                     
                                     
                                     <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                    </>
                                    )
                                      
                                
                                      
                          default:
                              return null
                      } 
               
                      case 14:
                        switch(parseInt(taille[1].finCours.substring(0, 2))){
                           case 15:
                                 return (
                                   <>
                                  
                                  <td style={{border:"none"}}></td>
                                  
                                  <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                 </>
                                 )
                                 case 16:
                                  return (
                                    <>
                                   
                                  
                                   <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                  </>
                                  )
                                
                                      
                                       
                           default:
                               return null
                       } 
                       case 15:
                        switch(parseInt(taille[1].finCours.substring(0, 2))){
                           case 16:
                                 return (
                                   <>
                            
                                  
                            <td  style={{ position: 'relative' }} colSpan={colSpanTd(16,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                 </>
                                 )
                                 
                                      
                                       
                           default:
                               return null
                       } 
                
         
        
         
         default:
                    return null
             }
            } 
            case 17:
       
              if(parseInt(taille[0].debutCours)===17){
                return (
                  <>
                   <td style={{border:"none"}}></td>
                   <td style={{border:"none"}}></td>
                   <td style={{border:"none"}}></td>
                   <td style={{border:"none"}}></td>
                  <td style={{border:"none"}}></td>
                  <td style={{border:"none"}}></td>
                  <td style={{border:"none"}}></td>
                  <td style={{border:"none"}}></td>
                  <td style={{border:"none"}}></td>
                  <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                  </>
                )  
              }
              else if(parseInt(taille[1].debutCours)===17){
                switch(parseInt(taille[0].debutCours.substring(0, 2))){
                  case 8:
                     
                           switch(parseInt(taille[0].finCours.substring(0, 2))){
                               case 9:
                                     return (
                                       <>
             
                                     
                                       <td style={{border:"none"}}></td>
                                       <td style={{border:"none"}}></td>
                                       <td style={{border:"none"}}></td>
                                       <td style={{border:"none"}}></td>
                                       <td style={{border:"none"}}></td>
                                       <td style={{border:"none"}}></td>
                                       <td style={{border:"none"}}></td>
                                       <td style={{border:"none"}}></td>
                                       <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                     </>
                                     )
                                     case 10:
                                       return (
                                         <>
                                          <td style={{border:"none"}}></td>
                                         <td style={{border:"none"}}></td>
                                          <td style={{border:"none"}}></td>
                                         <td style={{border:"none"}}></td>
                                         <td style={{border:"none"}}></td>
                                         <td style={{border:"none"}}></td>
                                         <td style={{border:"none"}}></td>
                                         <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                       </>
                                       )
                                       case 11:
                                         return (
                                           <>
                                            <td style={{border:"none"}}></td>
                                           <td style={{border:"none"}}></td>
                                            <td style={{border:"none"}}></td>
                                           <td style={{border:"none"}}></td>
                                           <td style={{border:"none"}}></td>
                                           <td style={{border:"none"}}></td>
                                           <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                         </>
                                         )
                                         case 12:
                                         return (
                                           <>
                                            <td style={{border:"none"}}></td>
                                           <td style={{border:"none"}}></td>
                                            <td style={{border:"none"}}></td>
                                           <td style={{border:"none"}}></td>
                                           <td style={{border:"none"}}></td>
                                           <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                         </>
                                         )
                                         case 13:
                                           return (
                                             <>
                                              <td style={{border:"none"}}></td>
                                             <td style={{border:"none"}}></td>
                                              <td style={{border:"none"}}></td>
                                             <td style={{border:"none"}}></td>
                                             <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                           </>
                                           )
                                           case 14:
                                             return (
                                               <>
                                                <td style={{border:"none"}}></td>
                                               <td style={{border:"none"}}></td>
                                                <td style={{border:"none"}}></td>
                                                <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                             </>
                                             )
                                             case 15:
                                             return (
                                               <>
                                                <td style={{border:"none"}}></td>
                                                 <td style={{border:"none"}}></td>
                                                 <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                             </>
                                             )
                                             case 16:
                                              return (
                                                <>
                                             <td style={{border:"none"}}></td>
                                             <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                              </>
                                              )
                                              case 17:
                                                return (
                                                  <>
                                                 <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                                </>
                                                )
                               default:
                                   return null
                           } 
             
               case 9:
                        switch(parseInt(taille[0].finCours.substring(0, 2))){
                            case 10:
                                  return (
                                    <>
                                    <td style={{border:"none"}}></td>
                                    <td style={{border:"none"}}></td>
                                    <td style={{border:"none"}}></td>
                                    <td style={{border:"none"}}></td>
                                    <td style={{border:"none"}}></td>
                                    <td style={{border:"none"}}></td>
                                    <td style={{border:"none"}}></td>
                                    <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                  </>
                                  )
                                  case 11:
                                    return (
                                      <>
                                      <td style={{border:"none"}}></td>
                                      <td style={{border:"none"}}></td>
                                      <td style={{border:"none"}}></td>
                                      <td style={{border:"none"}}></td>
                                      <td style={{border:"none"}}></td>
                                      <td style={{border:"none"}}></td>
                                     
                                      <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                    </>
                                    )
                                    case 12:
                                      return (
                                        <>
                                        <td style={{border:"none"}}></td>
                                        <td style={{border:"none"}}></td>
                                        <td style={{border:"none"}}></td>
                                        <td style={{border:"none"}}></td>
                                        <td style={{border:"none"}}></td>
                                        <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                      </>
                                      )
                                      case 13:
                                      return (
                                        <>
                                        <td style={{border:"none"}}></td>
                                        <td style={{border:"none"}}></td>
                                        <td style={{border:"none"}}></td>
                                       <td style={{border:"none"}}></td>
                                       <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                      </>
                                      )
                                      case 14:
                                        return (
                                          <>
                                          <td style={{border:"none"}}></td>
                                        <td style={{border:"none"}}></td>
                                        <td style={{border:"none"}}></td>
                                        <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                        </>
                                        )
                                        case 15:
                                          return (
                                            <>
                                         <td style={{border:"none"}}></td>
                                         <td style={{border:"none"}}></td>
                                         <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                          </>
                                          
                                          )
                                          case 16:
                                            return (
                                              <>
                                         <td style={{border:"none"}}></td>
                                         <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                            </>
                                            )
                                            case 17:
                                              return (
                                                <>
                                                  <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                              </>
                                              )
                                        
                            default:
                                return null
                        } 
          
             case 10:
                      switch(parseInt(taille[0].finCours.substring(0, 2))){
                          case 11:
                                return (
                                  <>
                                 
                                  <td style={{border:"none"}}></td>
                                  <td style={{border:"none"}}></td>
                                  <td style={{border:"none"}}></td>
                                  <td style={{border:"none"}}></td>
                                  <td style={{border:"none"}}></td>
                                  <td style={{border:"none"}}></td>
                                  <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                </>
                                )
                                case 12:
                                  return (
                                    <>
                                      <td style={{border:"none"}}></td>
                                    <td style={{border:"none"}}></td>
                                    <td style={{border:"none"}}></td>
                                    <td style={{border:"none"}}></td>
                                    <td style={{border:"none"}}></td>
                                  
                                    <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                  </>
                                  )
                                  case 13:
                                    return (
                                      <>
                                       <td style={{border:"none"}}></td>
                                      <td style={{border:"none"}}></td>
                                      <td style={{border:"none"}}></td>
                                      <td style={{border:"none"}}></td>
                                      <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                    </>
                                    )
                                    case 14:
                                    return (
                                      <>
                                      <td style={{border:"none"}}></td>
                                      <td style={{border:"none"}}></td>
                                      <td style={{border:"none"}}></td>
                                      <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                    </>
                                    )
                                    case 15:
                                      return (
                                        <>
                                        <td style={{border:"none"}}></td>
                                        <td style={{border:"none"}}></td>
                                        <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                      </>
                                      )
                                      case 16:
                                        return (
                                          <>
                                         <td style={{border:"none"}}></td>
                                         <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                        </>
                                        )
                                        case 17:
                                          return (
                                            <>
                                          
                                          <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                          </>
                                          )
                                    
                                      
                          default:
                              return null
                      } 
           case 11:
                    switch(parseInt(taille[0].finCours.substring(0, 2))){
                        case 12:
                              return (
                                <>
                               
                               
                                <td style={{border:"none"}}></td>
                                <td style={{border:"none"}}></td>
                                <td style={{border:"none"}}></td>
                                <td style={{border:"none"}}></td>
                                <td style={{border:"none"}}></td>
                                
                                <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                              </>
                              )
                              case 13:
                                return (
                                  <>
                                  
                                  <td style={{border:"none"}}></td>
                                  <td style={{border:"none"}}></td>
                                  <td style={{border:"none"}}></td>
                                  <td style={{border:"none"}}></td>
                                  <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                </>
                                )
                                case 14:
                                  return (
                                    <>
                                   
                                   <td style={{border:"none"}}></td>
                                   <td style={{border:"none"}}></td>
                                   <td style={{border:"none"}}></td>
                                   <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                  </>
                                  )
                                  case 15:
                                  return (
                                    <>
                                   
                                    
                                   <td style={{border:"none"}}></td>
                                   <td style={{border:"none"}}></td>
                                   <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                  </>
                                  )
                                  case 16:
                                    return (
                                      <>
                                     
                                     <td style={{border:"none"}}></td>
                                     <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                    </>
                                    )
                                    case 17:
                                      return (
                                        <>
                                       
                                       <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                      </>
                                      )
                                 
                                  
                                    
                        default:
                            return null
                    } 
             
                case 12:
                    switch(parseInt(taille[0].finCours.substring(0, 2))){
                        case 13:
                              return (
                                <>
                               
                               
                               <td style={{border:"none"}}></td>
                               <td style={{border:"none"}}></td>
                               <td style={{border:"none"}}></td>
                                <td style={{border:"none"}}></td>
                                
                                <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                              </>
                              )
                              case 14:
                                return (
                                  <>
                                  
                                  <td style={{border:"none"}}></td>
                                  <td style={{border:"none"}}></td>
                                  <td style={{border:"none"}}></td>
                                  <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                </>
                                )
                                case 15:
                                return (
                                  <>
                                  
                                  <td style={{border:"none"}}></td>
                                  <td style={{border:"none"}}></td>
                                  <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                </>
                                )
                                case 16:
                                  return (
                                    <>
                                    
                                    <td style={{border:"none"}}></td>
                                    <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                  </>
                                  )
                                  case 17:
                                    return (
                                      <>
                                      
                                      <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                    </>
                                    )
                                
                                   
                                  
                                    
                        default:
                            return null
                    } 
                    case 13:
                     switch(parseInt(taille[0].finCours.substring(0, 2))){
                        case 14:
                              return (
                                <>
                               
                               
                               <td style={{border:"none"}}></td>
                               <td style={{border:"none"}}></td>
                               
                               <td style={{border:"none"}}></td>
                               <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                              </>
                              )
                              case 15:
                                return (
                                  <>
                                 
                                 
                                 <td style={{border:"none"}}></td>
                               <td style={{border:"none"}}></td>
                               <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                </>
                                )
                                case 16:
                                  return (
                                    <>
                                   
                                   
                                   
                                   <td style={{border:"none"}}></td>
                                   <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                  </>
                                  )
                                  case 17:
                                    return (
                                      <>
                                     
                                     
                                     
                                     <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                    </>
                                    )
                                    
                              
                                    
                        default:
                            return null
                    } 
             
                    case 14:
                      switch(parseInt(taille[0].finCours.substring(0, 2))){
                         case 15:
                               return (
                                 <>
                                
                                <td style={{border:"none"}}></td>
                                <td style={{border:"none"}}></td>
                                
                                <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                               </>
                               )
                               case 16:
                                return (
                                  <>
                                 
                                 <td style={{border:"none"}}></td>
                                 <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                </>
                                )
                                case 17:
                                  return (
                                    <>
                                   
                                   <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                  </>
                                  )
                              
                                    
                                     
                         default:
                             return null
                     } 
                     case 15:
                      switch(parseInt(taille[0].finCours.substring(0, 2))){
                         case 16:
                               return (
                                 <>
                          <td style={{border:"none"}}></td>
                          <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                               </>
                               )
                               case 17:
                                return (
                                  <>
                          
                                 
                          <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                                </>
                                )
                               
                                    
                                     
                         default:
                             return null
                     } 
                     case 16:
                      switch(parseInt(taille[0].finCours.substring(0, 2))){
                         case 17:
                               return (
                                 <>
                          
                          <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
              <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            position: 'absolute',
            top: '24%',
            left: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
          <span>{`${element.nomSalle.toUpperCase()}`}</span>
        </span>
              </td>
                               </>
                               )
                              
                               
                                    
                                     
                         default:
                             return null
                     } 
              
               
       
       default:
                  return null
           }
           
            }else if(parseInt(taille[2].debutCours)===17){
              switch(parseInt(taille[1].debutCours.substring(0, 2))){
                case 8:
                   
                         switch(parseInt(taille[1].finCours.substring(0, 2))){
                             case 9:
                                   return (
                                     <>
           
                                   
                                     <td style={{border:"none"}}></td>
                                     <td style={{border:"none"}}></td>
                                     <td style={{border:"none"}}></td>
                                     <td style={{border:"none"}}></td>
                                     <td style={{border:"none"}}></td>
                                     <td style={{border:"none"}}></td>
                                     <td style={{border:"none"}}></td>
                                     <td style={{border:"none"}}></td>
                                     <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                   </>
                                   )
                                   case 10:
                                     return (
                                       <>
                                        <td style={{border:"none"}}></td>
                                       <td style={{border:"none"}}></td>
                                        <td style={{border:"none"}}></td>
                                       <td style={{border:"none"}}></td>
                                       <td style={{border:"none"}}></td>
                                       <td style={{border:"none"}}></td>
                                       <td style={{border:"none"}}></td>
                                       <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                     </>
                                     )
                                     case 11:
                                       return (
                                         <>
                                          <td style={{border:"none"}}></td>
                                         <td style={{border:"none"}}></td>
                                          <td style={{border:"none"}}></td>
                                         <td style={{border:"none"}}></td>
                                         <td style={{border:"none"}}></td>
                                         <td style={{border:"none"}}></td>
                                         <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                       </>
                                       )
                                       case 12:
                                       return (
                                         <>
                                          <td style={{border:"none"}}></td>
                                         <td style={{border:"none"}}></td>
                                          <td style={{border:"none"}}></td>
                                         <td style={{border:"none"}}></td>
                                         <td style={{border:"none"}}></td>
                                         <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                       </>
                                       )
                                       case 13:
                                         return (
                                           <>
                                            <td style={{border:"none"}}></td>
                                           <td style={{border:"none"}}></td>
                                            <td style={{border:"none"}}></td>
                                           <td style={{border:"none"}}></td>
                                           <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                         </>
                                         )
                                         case 14:
                                           return (
                                             <>
                                              <td style={{border:"none"}}></td>
                                             <td style={{border:"none"}}></td>
                                              <td style={{border:"none"}}></td>
                                              <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                           </>
                                           )
                                           case 15:
                                           return (
                                             <>
                                              <td style={{border:"none"}}></td>
                                               <td style={{border:"none"}}></td>
                                               <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                           </>
                                           )
                                           case 16:
                                            return (
                                              <>
                                           <td style={{border:"none"}}></td>
                                           <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                            </>
                                            )
                                            case 17:
                                              return (
                                                <>
                                               <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                              </>
                                              )
                             default:
                                 return null
                         } 
           
             case 9:
                      switch(parseInt(taille[1].finCours.substring(0, 2))){
                          case 10:
                                return (
                                  <>
                                  <td style={{border:"none"}}></td>
                                  <td style={{border:"none"}}></td>
                                  <td style={{border:"none"}}></td>
                                  <td style={{border:"none"}}></td>
                                  <td style={{border:"none"}}></td>
                                  <td style={{border:"none"}}></td>
                                  <td style={{border:"none"}}></td>
                                  <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                </>
                                )
                                case 11:
                                  return (
                                    <>
                                    <td style={{border:"none"}}></td>
                                    <td style={{border:"none"}}></td>
                                    <td style={{border:"none"}}></td>
                                    <td style={{border:"none"}}></td>
                                    <td style={{border:"none"}}></td>
                                    <td style={{border:"none"}}></td>
                                   
                                    <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                  </>
                                  )
                                  case 12:
                                    return (
                                      <>
                                      <td style={{border:"none"}}></td>
                                      <td style={{border:"none"}}></td>
                                      <td style={{border:"none"}}></td>
                                      <td style={{border:"none"}}></td>
                                      <td style={{border:"none"}}></td>
                                      <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                    </>
                                    )
                                    case 13:
                                    return (
                                      <>
                                      <td style={{border:"none"}}></td>
                                      <td style={{border:"none"}}></td>
                                      <td style={{border:"none"}}></td>
                                     <td style={{border:"none"}}></td>
                                     <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                    </>
                                    )
                                    case 14:
                                      return (
                                        <>
                                        <td style={{border:"none"}}></td>
                                      <td style={{border:"none"}}></td>
                                      <td style={{border:"none"}}></td>
                                      <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                      </>
                                      )
                                      case 15:
                                        return (
                                          <>
                                       <td style={{border:"none"}}></td>
                                       <td style={{border:"none"}}></td>
                                       <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                        </>
                                        
                                        )
                                        case 16:
                                          return (
                                            <>
                                       <td style={{border:"none"}}></td>
                                       <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                          </>
                                          )
                                          case 17:
                                            return (
                                              <>
                                                <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                            </>
                                            )
                                      
                          default:
                              return null
                      } 
        
           case 10:
                    switch(parseInt(taille[1].finCours.substring(0, 2))){
                        case 11:
                              return (
                                <>
                               
                                <td style={{border:"none"}}></td>
                                <td style={{border:"none"}}></td>
                                <td style={{border:"none"}}></td>
                                <td style={{border:"none"}}></td>
                                <td style={{border:"none"}}></td>
                                <td style={{border:"none"}}></td>
                                <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                              </>
                              )
                              case 12:
                                return (
                                  <>
                                    <td style={{border:"none"}}></td>
                                  <td style={{border:"none"}}></td>
                                  <td style={{border:"none"}}></td>
                                  <td style={{border:"none"}}></td>
                                  <td style={{border:"none"}}></td>
                                
                                  <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                </>
                                )
                                case 13:
                                  return (
                                    <>
                                     <td style={{border:"none"}}></td>
                                    <td style={{border:"none"}}></td>
                                    <td style={{border:"none"}}></td>
                                    <td style={{border:"none"}}></td>
                                    <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                  </>
                                  )
                                  case 14:
                                  return (
                                    <>
                                    <td style={{border:"none"}}></td>
                                    <td style={{border:"none"}}></td>
                                    <td style={{border:"none"}}></td>
                                    <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                  </>
                                  )
                                  case 15:
                                    return (
                                      <>
                                      <td style={{border:"none"}}></td>
                                      <td style={{border:"none"}}></td>
                                      <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                    </>
                                    )
                                    case 16:
                                      return (
                                        <>
                                       <td style={{border:"none"}}></td>
                                       <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                      </>
                                      )
                                      case 17:
                                        return (
                                          <>
                                        
                                        <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                        </>
                                        )
                                  
                                    
                        default:
                            return null
                    } 
         case 11:
                  switch(parseInt(taille[1].finCours.substring(0, 2))){
                      case 12:
                            return (
                              <>
                             
                             
                              <td style={{border:"none"}}></td>
                              <td style={{border:"none"}}></td>
                              <td style={{border:"none"}}></td>
                              <td style={{border:"none"}}></td>
                              <td style={{border:"none"}}></td>
                              
                              <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                            </>
                            )
                            case 13:
                              return (
                                <>
                                
                                <td style={{border:"none"}}></td>
                                <td style={{border:"none"}}></td>
                                <td style={{border:"none"}}></td>
                                <td style={{border:"none"}}></td>
                                <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                              </>
                              )
                              case 14:
                                return (
                                  <>
                                 
                                 <td style={{border:"none"}}></td>
                                 <td style={{border:"none"}}></td>
                                 <td style={{border:"none"}}></td>
                                 <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                </>
                                )
                                case 15:
                                return (
                                  <>
                                 
                                  
                                 <td style={{border:"none"}}></td>
                                 <td style={{border:"none"}}></td>
                                 <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                </>
                                )
                                case 16:
                                  return (
                                    <>
                                   
                                   <td style={{border:"none"}}></td>
                                   <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                  </>
                                  )
                                  case 17:
                                    return (
                                      <>
                                     
                                     <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                    </>
                                    )
                               
                                
                                  
                      default:
                          return null
                  } 
           
              case 12:
                  switch(parseInt(taille[1].finCours.substring(0, 2))){
                      case 13:
                            return (
                              <>
                             
                             
                             <td style={{border:"none"}}></td>
                             <td style={{border:"none"}}></td>
                             <td style={{border:"none"}}></td>
                              <td style={{border:"none"}}></td>
                              
                              <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                            </>
                            )
                            case 14:
                              return (
                                <>
                                
                                <td style={{border:"none"}}></td>
                                <td style={{border:"none"}}></td>
                                <td style={{border:"none"}}></td>
                                <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                              </>
                              )
                              case 15:
                              return (
                                <>
                                
                                <td style={{border:"none"}}></td>
                                <td style={{border:"none"}}></td>
                                <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                              </>
                              )
                              case 16:
                                return (
                                  <>
                                  
                                  <td style={{border:"none"}}></td>
                                  <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                </>
                                )
                                case 17:
                                  return (
                                    <>
                                    
                                    <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                  </>
                                  )
                              
                                 
                                
                                  
                      default:
                          return null
                  } 
                  case 13:
                   switch(parseInt(taille[1].finCours.substring(0, 2))){
                      case 14:
                            return (
                              <>
                             
                             
                             <td style={{border:"none"}}></td>
                             <td style={{border:"none"}}></td>
                             
                             <td style={{border:"none"}}></td>
                             <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                            </>
                            )
                            case 15:
                              return (
                                <>
                               
                               
                               <td style={{border:"none"}}></td>
                             <td style={{border:"none"}}></td>
                             <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                              </>
                              )
                              case 16:
                                return (
                                  <>
                                 
                                 
                                 
                                 <td style={{border:"none"}}></td>
                                 <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                </>
                                )
                                case 17:
                                  return (
                                    <>
                                   
                                   
                                   
                                   <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                  </>
                                  )
                                  
                            
                                  
                      default:
                          return null
                  } 
           
                  case 14:
                    switch(parseInt(taille[1].finCours.substring(0, 2))){
                       case 15:
                             return (
                               <>
                              
                              <td style={{border:"none"}}></td>
                              <td style={{border:"none"}}></td>
                              
                              <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                             </>
                             )
                             case 16:
                              return (
                                <>
                               
                               <td style={{border:"none"}}></td>
                               <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                              </>
                              )
                              case 17:
                                return (
                                  <>
                                 
                                 <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                                </>
                                )
                            
                                  
                                   
                       default:
                           return null
                   } 
                   case 15:
                    switch(parseInt(taille[1].finCours.substring(0, 2))){
                       case 16:
                             return (
                               <>
                        <td style={{border:"none"}}></td>
                        <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                             </>
                             )
                             case 17:
                              return (
                                <>
                        
                               
                        <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                              </>
                              )
                             
                                  
                                   
                       default:
                           return null
                   } 
                   case 16:
                    switch(parseInt(taille[1].finCours.substring(0, 2))){
                       case 17:
                             return (
                               <>
                        
                        <td  style={{ position: 'relative' }} colSpan={colSpanTd(17,fins)}>
            <span
        style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#000000',
          position: 'absolute',
          top: '24%',
          left: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${element.nom.toUpperCase()} ${element.prenom.toUpperCase()}`}</span>
        <span>{`${element.nomSalle.toUpperCase()}`}</span>
      </span>
            </td>
                             </>
                             )
                            
                             
                                  
                                   
                       default:
                           return null
                   } 
            
             
     
     default:
                return null
         }
          }
    default:
      return null;
  }
}
