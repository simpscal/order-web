const BUTTON_PRESET = {
    root: {
        borderRadius: '{form.field.border.radius}',
        roundedBorderRadius: '2rem',
        gap: '0.5rem',
        paddingX: '{form.field.padding.x}',
        paddingY: '{form.field.padding.y}',
        iconOnlyWidth: '2.5rem',
        sm: {
            fontSize: '{form.field.sm.font.size}',
            paddingX: '{form.field.sm.padding.x}',
            paddingY: '{form.field.sm.padding.y}'
        },
        lg: {
            fontSize: '{form.field.lg.font.size}',
            paddingX: '{form.field.lg.padding.x}',
            paddingY: '{form.field.lg.padding.y}'
        },
        label: {
            fontWeight: '500'
        },
        raisedShadow:
            '0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)',
        focusRing: {
            width: '{focus.ring.width}',
            style: '{focus.ring.style}',
            offset: '{focus.ring.offset}'
        },
        badgeSize: '1rem',
        transitionDuration: '{form.field.transition.duration}'
    },
    colorScheme: {
        light: {
            root: {
                primary: {
                    background: 'var(--brand)',
                    hoverBackground: 'var(--brand-hovered)',
                    activeBackground: 'var(--brand-pressed)',
                    borderColor: 'var(--brand)',
                    hoverBorderColor: 'var(--brand-hovered)',
                    activeBorderColor: 'var(--brand-pressed)',
                    color: 'var(--text-inverse)',
                    hoverColor: 'var(--text-inverse)',
                    activeColor: 'var(--text-inverse)',
                    focusRing: {
                        color: 'var(--brand)',
                        shadow: 'none'
                    }
                },
                secondary: {
                    background: 'var(--neutral-100)',
                    hoverBackground: 'var(--neutral-200)',
                    activeBackground: 'var(--neutral-300)',
                    borderColor: 'var(--neutral-100)',
                    hoverBorderColor: 'var(--neutral-200)',
                    activeBorderColor: 'var(--neutral-300)',
                    color: 'var(--neutral-600)',
                    hoverColor: 'var(--neutral-700)',
                    activeColor: 'var(--neutral-800)',
                    focusRing: {
                        color: 'var(--neutral-600)',
                        shadow: 'none'
                    }
                },
                info: {
                    background: 'var(--information-500)',
                    hoverBackground: 'var(--information-600)',
                    activeBackground: 'var(--information-700)',
                    borderColor: 'var(--information-500)',
                    hoverBorderColor: 'var(--information-600)',
                    activeBorderColor: 'var(--information-700)',
                    color: '#ffffff',
                    hoverColor: '#ffffff',
                    activeColor: '#ffffff',
                    focusRing: {
                        color: 'var(--information-500)',
                        shadow: 'none'
                    }
                },
                success: {
                    background: 'var(--success-500)',
                    hoverBackground: 'var(--success-600)',
                    activeBackground: 'var(--success-700)',
                    borderColor: 'var(--success-500)',
                    hoverBorderColor: 'var(--success-600)',
                    activeBorderColor: 'var(--success-700)',
                    color: '#ffffff',
                    hoverColor: '#ffffff',
                    activeColor: '#ffffff',
                    focusRing: {
                        color: 'var(--success-500)',
                        shadow: 'none'
                    }
                },
                warn: {
                    background: 'var(--warning-500)',
                    hoverBackground: 'var(--warning-600)',
                    activeBackground: 'var(--warning-700)',
                    borderColor: 'var(--warning-500)',
                    hoverBorderColor: 'var(--warning-600)',
                    activeBorderColor: 'var(--warning-700)',
                    color: '#ffffff',
                    hoverColor: '#ffffff',
                    activeColor: '#ffffff',
                    focusRing: {
                        color: 'var(--warning-500)',
                        shadow: 'none'
                    }
                },
                help: {
                    background: 'var(--discovery-500)',
                    hoverBackground: 'var(--discovery-600)',
                    activeBackground: 'var(--discovery-700)',
                    borderColor: 'var(--discovery-500)',
                    hoverBorderColor: 'var(--discovery-600)',
                    activeBorderColor: 'var(--discovery-700)',
                    color: '#ffffff',
                    hoverColor: '#ffffff',
                    activeColor: '#ffffff',
                    focusRing: {
                        color: 'var(--discovery-500)',
                        shadow: 'none'
                    }
                },
                danger: {
                    background: 'var(--danger-500)',
                    hoverBackground: 'var(--danger-600)',
                    activeBackground: 'var(--danger-700)',
                    borderColor: 'var(--danger-500)',
                    hoverBorderColor: 'var(--danger-600)',
                    activeBorderColor: 'var(--danger-700)',
                    color: '#ffffff',
                    hoverColor: '#ffffff',
                    activeColor: '#ffffff',
                    focusRing: {
                        color: 'var(--danger-500)',
                        shadow: 'none'
                    }
                },
                contrast: {
                    background: 'var(--neutral-1000)',
                    hoverBackground: 'var(--neutral-900)',
                    activeBackground: 'var(--neutral-800)',
                    borderColor: 'var(--neutral-1000)',
                    hoverBorderColor: 'var(--neutral-900)',
                    activeBorderColor: 'var(--neutral-800)',
                    color: 'var(--neutral-0)',
                    hoverColor: 'var(--neutral-0)',
                    activeColor: 'var(--neutral-0)',
                    focusRing: {
                        color: 'var(--surface-1000)',
                        shadow: 'none'
                    }
                }
            },
            outlined: {
                primary: {
                    hoverBackground: 'var(--blue-100)',
                    activeBackground: 'var(--blue-200)',
                    borderColor: 'var(--blue-300)',
                    color: 'var(--brand)'
                },
                secondary: {
                    hoverBackground: 'var(--neutral-100)',
                    activeBackground: 'var(--neutral-200)',
                    borderColor: 'var(--neutral-300)',
                    color: 'var(--neutral-500)'
                },
                success: {
                    hoverBackground: 'var(--green-100)',
                    activeBackground: 'var(--green-200)',
                    borderColor: 'var(--green-300)',
                    color: 'var(--success)'
                },
                info: {
                    hoverBackground: 'var(--blue-100)',
                    activeBackground: 'var(--blue-200)',
                    borderColor: 'var(--blue-300)',
                    color: 'var(--information)'
                },
                warn: {
                    hoverBackground: 'var(--orange-100)',
                    activeBackground: 'var(--orange-200)',
                    borderColor: 'var(--orange-300)',
                    color: 'var(--warning)'
                },
                help: {
                    hoverBackground: 'var(--purple-100)',
                    activeBackground: 'var(--purple-200)',
                    borderColor: 'var(--purple-300)',
                    color: 'var(--discovery)'
                },
                danger: {
                    hoverBackground: 'var(--red-100)',
                    activeBackground: 'var(--red-200)',
                    borderColor: 'var(--red-300)',
                    color: 'var(--danger)'
                },
                contrast: {
                    hoverBackground: 'var(--neutral-100)',
                    activeBackground: 'var(--neutral-200)',
                    borderColor: 'var(--neutral-700)',
                    color: 'var(--neutral-900)'
                },
                plain: {
                    hoverBackground: 'var(--neutral-100)',
                    activeBackground: 'var(--neutral-200)',
                    borderColor: 'var(--neutral-300)',
                    color: 'var(--neutral-700)'
                }
            },
            text: {
                primary: {
                    hoverBackground: 'var(--blue-100)',
                    activeBackground: 'var(--blue-200)',
                    color: 'var(--brand)'
                },
                secondary: {
                    hoverBackground: 'var(--neutral-100)',
                    activeBackground: 'var(--neutral-200)',
                    color: 'var(--neutral-500)'
                },
                success: {
                    hoverBackground: 'var(--green-100)',
                    activeBackground: 'var(--green-200)',
                    color: 'var(--success)'
                },
                info: {
                    hoverBackground: 'var(--blue-100)',
                    activeBackground: 'var(--blue-200)',
                    color: 'var(--information)'
                },
                warn: {
                    hoverBackground: 'var(--orange-100)',
                    activeBackground: 'var(--orange-200)',
                    color: 'var(--warning)'
                },
                help: {
                    hoverBackground: 'var(--purple-100)',
                    activeBackground: 'var(--purple-200)',
                    color: 'var(--discovery)'
                },
                danger: {
                    hoverBackground: 'var(--red-100)',
                    activeBackground: 'var(--red-200)',
                    color: 'var(--danger)'
                },
                contrast: {
                    hoverBackground: 'var(--surface-100)',
                    activeBackground: 'var(--surface-200)',
                    color: 'var(--surface-1000)'
                },
                plain: {
                    hoverBackground: 'var(--neutral-100)',
                    activeBackground: 'var(--neutral-200)',
                    color: 'var(--neutral-700)'
                }
            },
            link: {
                color: 'var(--link)',
                hoverColor: 'var(--link)',
                activeColor: 'var(--link)'
            }
        }
    }
};

export default BUTTON_PRESET;
