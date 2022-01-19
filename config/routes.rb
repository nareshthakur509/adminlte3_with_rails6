Rails.application.routes.draw do
  get 'home/index'
  root 'home#index'

  get "/home", to: "home#index"
  get "/home2", to: "home#index2"
  get "/home3", to: "home#index3"
  get "/widgets", to: "home#widgets"
  get "/charts", to: "home#charts"
  get "/anviam_charts", to: "home#anviam_charts"
  get "/anviam_tables", to: "home#anviam_tables"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
