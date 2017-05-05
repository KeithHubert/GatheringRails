class Api::V1::BaseController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  respond_to :json
end
