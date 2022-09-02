import actions from './actions';
const formData = [
  {
    id: "",
    name: "",
    "options":{
        "theme":"theme-1",
        "display_on_all_pages": false,
        "chat_visibility_type":"show_on_reload",
        "tag": 1,
        "send_mail_upon_message_submission": true,
        "greet_image_url":"",
        "greet_video_url":"",
        "greet_message":"Welcome to Directorist, leave your questions below",
        "greet_message_font_color": "#FFFFFF",
        "greet_message_font_size": "medium",
        "show_description":true,
        "description":"Welcome to Directorist, leave your questions below",
        "chat_options_title":"How would you like to chat?",
        "can_replay_in":[
           "video",
           "screenRecord",
           "audio",
           "text"
        ],
        "show_footer":true,
        "footer_message":"You can practice before sending",
        "thank_page_title":"Thank You",
        "show_thank_page_description":true,
        "thank_page_description":"Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface",
        "collect_info":true,
        "collectable_info":[
           "name",
           "email",
           "phone"
        ],
        "show_thank_page_cta_button":true,
        "thank_page_cta_button_text":"Try for Free",
        "thank_page_cta_button_url":"https://dashboardmarket.com/",
        "thank_page_background_color":"#23ffffff",
        "thank_page_title_color":"#000000",
        "thank_page_title_font_size":"XX-large",
        "thank_page_description_font_size":"Medium",
        "thank_page_description_color":"#000000",
        "primary_color": "#2271b1",
        "page_background_color": "#ffffff",
        "thank_page_cta_font_color":"#23030308",
        "thank_page_cta_button_color":"#236551F2",
        "thank_page_cta_button_text_color":"#23ffffff",
        "thank_page_cta_button_radius":"10",
        "font_family":"Roboto",
        "font_size":"Medium",
        "font_color":"#23ffffff",
        "button_color":"#6551f2",
        "button_border_radius":"10",
        "chat_options_title_font_size": "medium",
        "chat_options_title_font_color": "#FFFFFF",
        "footer_message_font_size": "medium",
        "primary_button_font_color": "#FFFFFF",
        "primary_button_background_color": "#2271b1",
    },
    pages: "0,20",
    is_default: true,
  }
]

const initialState = {
  data: formData,
  response: "",
  loading: false,
  error: null,
};

const {
  FORM_READ_BEGIN,
  FORM_READ_SUCCESS,
  FORM_READ_ERR,

  FORM_ADD_BEGIN,
  FORM_ADD_SUCCESS,
  FORM_ADD_ERR,

  FORM_UPDATE_BEGIN,
  FORM_UPDATE_SUCCESS,
  FORM_UPDATE_ERR,
} = actions;

const FormReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case FORM_ADD_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case FORM_ADD_SUCCESS:
      return {
        ...state,
        response: JSON.parse(data),
        loading: false,
      };
    case FORM_ADD_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    case FORM_READ_BEGIN:
      return {
        ...state,
      };
    case FORM_READ_SUCCESS:
      return {
        ...state,
        data,
      };
    case FORM_READ_ERR:
      return {
        ...state,
        error: err,
      };
    case FORM_UPDATE_BEGIN:
      return {
        ...state,
      };
    case FORM_UPDATE_SUCCESS:
      return {
        ...state,
        data,
      };
    case FORM_UPDATE_ERR:
      return {
        ...state,
        error: err,
      };
    default:
      return state;
  }
};

export default FormReducer;
